'use strict';

const { google } = require('googleapis');
const { saveTokens, loadTokens } = require('./tokens');

/**
 * Build an OAuth2 client from environment variables.
 * Returns null when Google is not configured.
 */
function buildOAuthClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) return null;

  const client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

  const tokens = loadTokens();
  if (tokens) client.setCredentials(tokens);

  // Auto-save refreshed tokens
  client.on('tokens', (newTokens) => {
    const current = loadTokens() || {};
    saveTokens({ ...current, ...newTokens });
  });

  return client;
}

/** Generate the Google OAuth consent URL. */
function getAuthUrl() {
  const client = buildOAuthClient();
  if (!client) throw new Error('Google OAuth is not configured.');

  return client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/calendar.events'],
  });
}

/** Exchange an authorization code for tokens and persist them. */
async function handleCallback(code) {
  const client = buildOAuthClient();
  if (!client) throw new Error('Google OAuth is not configured.');

  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);
  saveTokens(tokens);
  return tokens;
}

/**
 * Create a Google Calendar event for a booking.
 * Returns the event ID, or null if Google Calendar is not configured.
 */
async function createCalendarEvent(booking) {
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
  const client = buildOAuthClient();
  if (!client) return null;

  const tokens = loadTokens();
  if (!tokens) return null;

  client.setCredentials(tokens);

  const calendar = google.calendar({ version: 'v3', auth: client });

  const summary = `${booking.service} – ${booking.name}`;
  const description = [
    booking.address ? `Address: ${booking.address}` : null,
    booking.email ? `Email: ${booking.email}` : null,
    booking.phone ? `Phone: ${booking.phone}` : null,
    booking.notes ? `Notes: ${booking.notes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  // Default: 1-hour appointment starting at noon tomorrow if no time given
  let start = new Date();
  start.setDate(start.getDate() + 1);
  start.setHours(12, 0, 0, 0);

  if (booking.preferred_time) {
    const parsed = new Date(booking.preferred_time);
    if (!isNaN(parsed)) start = parsed;
  }

  const end = new Date(start.getTime() + 60 * 60 * 1000); // +1 hour

  const event = {
    summary,
    description,
    start: { dateTime: start.toISOString(), timeZone: 'America/Los_Angeles' },
    end: { dateTime: end.toISOString(), timeZone: 'America/Los_Angeles' },
  };

  if (booking.email) {
    event.attendees = [{ email: booking.email }];
  }

  const res = await calendar.events.insert({ calendarId, resource: event });
  return res.data.id;
}

module.exports = { getAuthUrl, handleCallback, createCalendarEvent, buildOAuthClient };
