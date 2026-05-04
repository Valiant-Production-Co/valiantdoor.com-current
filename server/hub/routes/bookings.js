'use strict';

const { Router } = require('express');
const { createBooking, updateBookingSync } = require('../lib/db');
const { createCalendarEvent } = require('../lib/calendar');
const { notifyBotpress } = require('../lib/botpress');
const { createHcpLead } = require('../lib/housecallpro');

const router = Router();

/** Validate the booking request body. Returns an array of error strings. */
function validate(body) {
  const errors = [];
  if (!body.name || String(body.name).trim().length < 2) {
    errors.push('name is required (min 2 characters)');
  }
  if (!body.service || String(body.service).trim().length < 2) {
    errors.push('service is required');
  }
  if (!body.email && !body.phone) {
    errors.push('at least one of email or phone is required');
  }
  if (body.email && !isValidEmail(String(body.email).trim())) {
    errors.push('email is invalid');
  }
  return errors;
}

/**
 * Basic email format check without regex backtracking risk.
 * Checks structure: non-empty local @ non-empty domain with at least one dot and a 2+ char TLD.
 */
function isValidEmail(email) {
  if (!email || email.length > 254) return false;
  const atIdx = email.indexOf('@');
  if (atIdx < 1 || atIdx !== email.lastIndexOf('@')) return false;
  const local = email.slice(0, atIdx);
  const domain = email.slice(atIdx + 1);
  if (!local || !domain) return false;
  if (local.includes(' ') || domain.includes(' ')) return false;
  const dotIdx = domain.lastIndexOf('.');
  if (dotIdx < 1 || dotIdx >= domain.length - 2) return false;
  return true;
}

/**
 * POST /api/bookings
 *
 * Body (JSON or form-encoded):
 *   name, email, phone, address, service, preferred_time, notes
 */
router.post('/api/bookings', async (req, res) => {
  const body = req.body || {};

  const errors = validate(body);
  if (errors.length) {
    return res.status(400).json({ ok: false, errors });
  }

  // Sanitize
  const data = {
    name: String(body.name).trim(),
    email: body.email ? String(body.email).trim().toLowerCase() : null,
    phone: body.phone ? String(body.phone).trim() : null,
    address: body.address ? String(body.address).trim() : null,
    service: String(body.service).trim(),
    preferred_time: body.preferred_time ? String(body.preferred_time).trim() : null,
    notes: body.notes ? String(body.notes).trim() : null,
  };

  let booking;
  try {
    booking = createBooking(data);
  } catch (err) {
    console.error('[bookings] DB error:', err);
    return res.status(500).json({ ok: false, errors: ['Failed to save booking'] });
  }

  // ── Integrations (fire-and-forget, non-blocking for the HTTP response) ──
  const syncUpdates = {};

  // Google Calendar
  try {
    const eventId = await createCalendarEvent(booking);
    if (eventId) {
      syncUpdates.gcal_event_id = eventId;
      syncUpdates.status = 'synced';
    }
  } catch (err) {
    console.error('[bookings] Google Calendar error:', err.message);
  }

  // Botpress
  try {
    const sent = await notifyBotpress(booking);
    syncUpdates.botpress_sent = sent ? 1 : 0;
  } catch (err) {
    console.error('[bookings] Botpress error:', err.message);
  }

  // Housecall Pro
  try {
    const hcp = await createHcpLead(booking);
    syncUpdates.hcp_sent = hcp.sent ? 1 : 0;
  } catch (err) {
    console.error('[bookings] HCP error:', err.message);
  }

  // Persist sync results
  try {
    if (Object.keys(syncUpdates).length) {
      updateBookingSync(booking.id, syncUpdates);
    }
  } catch (err) {
    console.error('[bookings] Sync update error:', err.message);
  }

  return res.status(201).json({
    ok: true,
    id: booking.id,
    message: 'Booking received. We will contact you shortly to confirm your appointment.',
  });
});

module.exports = router;
