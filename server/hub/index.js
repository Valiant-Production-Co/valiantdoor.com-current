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
      sameSite: 'lax',
      maxAge: 8 * 60 * 60 * 1000, // 8 hours
    },
  })
);

// ── CSRF protection for admin form routes ─────────────────────────────────────
// Generate and persist a CSRF token in the session; validate it on state-
// changing POST requests to admin paths.
app.use((req, res, next) => {
  // Seed a CSRF token once per session
  if (!req.session.csrfToken) {
    const { randomBytes } = require('crypto');
    req.session.csrfToken = randomBytes(24).toString('hex');
  }
  // Expose helper so admin routes can embed the token in forms
  res.locals.csrfToken = req.session.csrfToken;

  // Validate CSRF token on admin form POST submissions
  const adminPostPaths = ['/admin/login', '/admin/logout'];
  if (req.method === 'POST' && adminPostPaths.includes(req.path)) {
    const submitted = req.body && req.body._csrf;
    if (!submitted || submitted !== req.session.csrfToken) {
      res.status(403).send('<p>Invalid or missing CSRF token. Please reload and try again.</p>');
      return;
    }
  }

  next();
});

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
