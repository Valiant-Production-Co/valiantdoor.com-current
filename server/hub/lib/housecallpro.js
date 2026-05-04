'use strict';

/**
 * Housecall Pro integration stub.
 *
 * When HCP API credentials are provided (HOUSECALLPRO_API_KEY), this module
 * will create a lead/customer record.  For now it logs the attempt and returns
 * a pending status so the booking is still recorded correctly.
 *
 * TODO: Replace the stub body with real HCP API calls once credentials and the
 *       exact API endpoints are confirmed.
 */
async function createHcpLead(booking) {
  const apiKey = process.env.HOUSECALLPRO_API_KEY;

  if (!apiKey) {
    console.log('[HCP] HOUSECALLPRO_API_KEY not configured – skipping HCP sync.');
    return { sent: false, reason: 'not_configured' };
  }

  // --- stub: log payload that would be sent to HCP ---
  const payload = {
    customer: {
      first_name: (booking.name || '').split(' ')[0] || booking.name,
      last_name: (booking.name || '').split(' ').slice(1).join(' ') || '',
      email: booking.email || undefined,
      mobile_number: booking.phone || undefined,
    },
    notes: [booking.address, booking.service, booking.notes].filter(Boolean).join(' | '),
  };

  console.log('[HCP] Would send lead payload:', JSON.stringify(payload));
  console.log('[HCP] Stub: mark as pending until HCP API is wired up.');

  return { sent: false, reason: 'stub' };
}

module.exports = { createHcpLead };
