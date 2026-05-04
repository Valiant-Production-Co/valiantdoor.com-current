'use strict';

const https = require('https');
const http = require('http');

/**
 * Send a booking payload to the configured Botpress webhook.
 * Returns true on success, false if not configured or on error.
 */
async function notifyBotpress(booking) {
  const webhookUrl = process.env.BOTPRESS_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const payload = {
    type: 'booking.created',
    booking: {
      id: booking.id,
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      address: booking.address,
      service: booking.service,
      preferred_time: booking.preferred_time,
      notes: booking.notes,
      created_at: booking.created_at,
    },
  };

  const body = Buffer.from(JSON.stringify(payload), 'utf8');
  const parsed = new URL(webhookUrl);
  const client = parsed.protocol === 'https:' ? https : http;

  return new Promise((resolve) => {
    const req = client.request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
        path: `${parsed.pathname}${parsed.search}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': body.length,
          'User-Agent': 'valiant-hub/1.0',
        },
      },
      (res) => {
        res.resume();
        resolve(res.statusCode >= 200 && res.statusCode < 300);
      }
    );
    req.on('error', () => resolve(false));
    req.write(body);
    req.end();
  });
}

module.exports = { notifyBotpress };
