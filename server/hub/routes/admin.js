'use strict';

const { Router } = require('express');
const { listBookings } = require('../lib/db');

const router = Router();

/** Render a simple HTML admin dashboard. */
function renderAdmin(bookings, csrfToken) {
  const rows = bookings
    .map((b) => {
      const gcal = b.gcal_event_id
        ? `<a href="https://calendar.google.com/calendar/r/eventedit/${b.gcal_event_id}" target="_blank" rel="noopener">View</a>`
        : '<span class="badge pending">–</span>';
      const bp = b.botpress_sent
        ? '<span class="badge ok">✓</span>'
        : '<span class="badge pending">–</span>';
      const hcp = b.hcp_sent
        ? '<span class="badge ok">✓</span>'
        : '<span class="badge pending">–</span>';
      return `
        <tr>
          <td>${b.id}</td>
          <td>${esc(b.name)}</td>
          <td>${esc(b.email || '')}</td>
          <td>${esc(b.phone || '')}</td>
          <td>${esc(b.address || '')}</td>
          <td>${esc(b.service)}</td>
          <td>${esc(b.preferred_time || '')}</td>
          <td>${esc(b.notes || '')}</td>
          <td><span class="badge ${b.status === 'synced' ? 'ok' : 'pending'}">${esc(b.status)}</span></td>
          <td>${gcal}</td>
          <td>${bp}</td>
          <td>${hcp}</td>
          <td>${esc(b.created_at)}</td>
        </tr>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Valiant Hub – Admin</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:system-ui,sans-serif;background:#0f1012;color:#e8e0cc;padding:24px}
  h1{color:#c7a34b;margin-bottom:18px;font-size:1.4rem;letter-spacing:.08em}
  p.meta{margin-bottom:16px;font-size:.85rem;color:#888}
  a{color:#c7a34b}
  .table-wrap{overflow-x:auto}
  table{width:100%;border-collapse:collapse;font-size:.78rem}
  th{background:#1a1a1f;color:#c7a34b;text-align:left;padding:8px 10px;white-space:nowrap;border-bottom:1px solid #333}
  td{padding:7px 10px;border-bottom:1px solid #222;vertical-align:top;white-space:nowrap}
  tr:hover td{background:rgba(199,163,75,.06)}
  .badge{display:inline-block;padding:2px 7px;border-radius:999px;font-size:.72rem;font-weight:600;letter-spacing:.04em}
  .badge.ok{background:rgba(34,197,94,.18);color:#4ade80}
  .badge.pending{background:rgba(107,114,128,.18);color:#9ca3af}
  .gcal-link{color:#c7a34b}
  form.logout{display:inline;margin-left:16px}
  button{background:#c7a34b;border:none;color:#0f1012;padding:6px 14px;border-radius:6px;cursor:pointer;font-weight:600;font-size:.8rem}
  .topbar{display:flex;align-items:center;margin-bottom:20px;gap:12px}
  .count{font-size:.85rem;color:#888}
  .no-bookings{padding:30px;text-align:center;color:#666}
</style>
</head>
<body>
<div class="topbar">
  <h1>Valiant Hub — Bookings</h1>
  <span class="count">${bookings.length} record${bookings.length !== 1 ? 's' : ''}</span>
  <form class="logout" action="/admin/logout" method="post">
    <input type="hidden" name="_csrf" value="${esc(csrfToken)}">
    <button type="submit">Log out</button>
  </form>
</div>
<p class="meta">
  <a href="/auth/google">Connect / re-connect Google Calendar</a>
  &nbsp;|&nbsp;
  <a href="/api/health">Health check</a>
</p>
${
  bookings.length
    ? `<div class="table-wrap"><table>
<thead>
  <tr>
    <th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Address</th>
    <th>Service</th><th>Preferred Time</th><th>Notes</th>
    <th>Status</th><th>GCal</th><th>Botpress</th><th>HCP</th><th>Created</th>
  </tr>
</thead>
<tbody>${rows}</tbody>
</table></div>`
    : '<p class="no-bookings">No bookings yet.</p>'
}
</body>
</html>`;
}

/** Escape HTML special characters. */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Middleware: require admin session ──────────────────────────────────────────
function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) return next();
  return res.redirect('/admin/login');
}

// ── Login page ─────────────────────────────────────────────────────────────────
router.get('/admin/login', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Admin Login – Valiant Hub</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:system-ui,sans-serif;background:#0f1012;color:#e8e0cc;display:flex;align-items:center;justify-content:center;min-height:100vh}
  .card{background:#1a1a1f;border:1px solid #c7a34b44;border-radius:12px;padding:32px 28px;width:320px}
  h1{color:#c7a34b;font-size:1.2rem;margin-bottom:20px;text-align:center}
  label{display:block;font-size:.8rem;color:#888;margin-bottom:4px}
  input{width:100%;background:#0f1012;border:1px solid #333;border-radius:6px;color:#e8e0cc;padding:9px 12px;font-size:.9rem;margin-bottom:16px}
  input:focus{outline:none;border-color:#c7a34b}
  button{width:100%;background:#c7a34b;border:none;color:#0f1012;padding:10px;border-radius:6px;cursor:pointer;font-weight:700;font-size:.9rem}
  .err{color:#f87171;font-size:.8rem;margin-bottom:12px}
</style>
</head>
<body>
<div class="card">
  <h1>Valiant Hub</h1>
  ${req.query.error ? '<p class="err">Incorrect password. Try again.</p>' : ''}
  <form method="post" action="/admin/login">
    <input type="hidden" name="_csrf" value="${esc(res.locals.csrfToken || '')}">
    <label for="password">Admin Password</label>
    <input id="password" name="password" type="password" autocomplete="current-password" required>
    <button type="submit">Sign in</button>
  </form>
</div>
</body>
</html>`);
});

router.post('/admin/login', (req, res) => {
  const password = String(req.body?.password || '');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return res.redirect('/admin/login?error=1');
  }

  req.session.isAdmin = true;
  return res.redirect('/admin');
});

router.post('/admin/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/admin/login'));
});

// ── Dashboard ──────────────────────────────────────────────────────────────────
router.get('/admin', requireAdmin, (req, res) => {
  const bookings = listBookings();
  res.send(renderAdmin(bookings, res.locals.csrfToken));
});

module.exports = router;
