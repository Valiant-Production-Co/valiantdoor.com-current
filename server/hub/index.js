'use strict';

require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cors = require('cors');

const bookingsRouter = require('./routes/bookings');
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');
const webhooksRouter = require('./routes/webhooks');

const app = express();
const PORT = Number(process.env.PORT) || 3001;

// ── Trust proxy when running behind nginx / Caddy ─────────────────────────────
app.set('trust proxy', 1);

// ── Body parsers ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: false, limit: '256kb' }));

// ── CORS (allow the main site to POST to /api/bookings) ───────────────────────
const allowedOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

if (allowedOrigins.length) {
  app.use(
    cors({
      origin: allowedOrigins,
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type'],
    })
  );
} else {
  app.use(cors());
}

// ── Session (used for /admin auth) ────────────────────────────────────────────
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'changeme-please-set-SESSION_SECRET',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 8 * 60 * 60 * 1000, // 8 hours
    },
  })
);

// ── Routes ────────────────────────────────────────────────────────────────────
app.use(bookingsRouter);
app.use(adminRouter);
app.use(authRouter);
app.use(webhooksRouter);

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'valiant-hub', ts: new Date().toISOString() });
});

// ── 404 fallback ──────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[valiant-hub] listening on http://localhost:${PORT}`);
  console.log(`  Admin:         http://localhost:${PORT}/admin`);
  console.log(`  Bookings API:  POST http://localhost:${PORT}/api/bookings`);
  console.log(`  Google Auth:   http://localhost:${PORT}/auth/google`);
  console.log(`  Health:        http://localhost:${PORT}/api/health`);
});

module.exports = app; // exported for testing
