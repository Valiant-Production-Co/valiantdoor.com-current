'use strict';

const { Router } = require('express');
const { getAuthUrl, handleCallback } = require('../lib/calendar');

const router = Router();

/** Escape HTML special characters to prevent XSS in server-rendered messages. */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** GET /auth/google – redirect to Google consent screen */
router.get('/auth/google', (req, res) => {
  try {
    const url = getAuthUrl();
    return res.redirect(url);
  } catch (err) {
    return res.status(500).send(
      `<p>Google OAuth is not configured: ${escHtml(err.message)}</p>`
    );
  }
});

/** GET /auth/google/callback – exchange code for tokens */
router.get('/auth/google/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('<p>Missing OAuth code parameter.</p>');
  }
  try {
    await handleCallback(String(code));
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Google Connected</title>
<style>body{font-family:system-ui,sans-serif;background:#0f1012;color:#e8e0cc;display:flex;align-items:center;justify-content:center;min-height:100vh}</style>
</head>
<body><p>&#x2705; Google Calendar connected successfully. <a href="/admin" style="color:#c7a34b">Back to admin</a></p></body></html>`);
  } catch (err) {
    console.error('[auth] Google callback error:', err);
    return res.status(500).send(
      `<p>OAuth exchange failed: ${escHtml(err.message)}</p>`
    );
  }
});

module.exports = router;
