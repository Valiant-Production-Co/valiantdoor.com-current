'use strict';

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_PATH = path.join(DATA_DIR, 'bookings.db');

let _db = null;

function getDb() {
  if (_db) return _db;

  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

  _db = new Database(DB_PATH);

  // Enable WAL for better concurrency
  _db.pragma('journal_mode = WAL');

  _db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      name        TEXT    NOT NULL,
      email       TEXT,
      phone       TEXT,
      address     TEXT,
      service     TEXT    NOT NULL,
      preferred_time TEXT,
      notes       TEXT,
      status      TEXT    NOT NULL DEFAULT 'pending',
      gcal_event_id   TEXT,
      botpress_sent   INTEGER NOT NULL DEFAULT 0,
      hcp_sent        INTEGER NOT NULL DEFAULT 0,
      created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
    )
  `);

  return _db;
}

/** Insert a new booking and return the full row. */
function createBooking(data) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO bookings
      (name, email, phone, address, service, preferred_time, notes)
    VALUES
      (@name, @email, @phone, @address, @service, @preferred_time, @notes)
  `);
  const info = stmt.run({
    name: data.name || '',
    email: data.email || null,
    phone: data.phone || null,
    address: data.address || null,
    service: data.service || '',
    preferred_time: data.preferred_time || null,
    notes: data.notes || null,
  });
  return getBookingById(info.lastInsertRowid);
}

/** Return all bookings, newest first. */
function listBookings({ limit = 200 } = {}) {
  const db = getDb();
  return db.prepare('SELECT * FROM bookings ORDER BY created_at DESC LIMIT ?').all(limit);
}

/** Return a single booking by id. */
function getBookingById(id) {
  const db = getDb();
  return db.prepare('SELECT * FROM bookings WHERE id = ?').get(id);
}

/** Update sync status fields on a booking. */
function updateBookingSync(id, fields) {
  const db = getDb();
  const allowed = ['status', 'gcal_event_id', 'botpress_sent', 'hcp_sent'];
  const sets = Object.keys(fields)
    .filter((k) => allowed.includes(k))
    .map((k) => `${k} = @${k}`)
    .join(', ');
  if (!sets) return;
  db.prepare(`UPDATE bookings SET ${sets} WHERE id = @id`).run({ ...fields, id });
}

module.exports = { createBooking, listBookings, getBookingById, updateBookingSync };
