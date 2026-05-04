'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const TOKENS_FILE = path.join(__dirname, '..', 'data', 'tokens.enc');

/**
 * Return a 32-byte Buffer from the ENCRYPTION_KEY env variable.
 * ENCRYPTION_KEY must be a 64-char hex string.
 */
function getKey() {
  const hex = process.env.ENCRYPTION_KEY || '';
  if (hex.length !== 64) {
    throw new Error(
      'ENCRYPTION_KEY must be a 64-character hex string (32 bytes). ' +
        'Generate one with: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"'
    );
  }
  return Buffer.from(hex, 'hex');
}

/** Encrypt an object to a hex string (AES-256-GCM). */
function encrypt(data) {
  const key = getKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const json = Buffer.from(JSON.stringify(data), 'utf8');
  const encrypted = Buffer.concat([cipher.update(json), cipher.final()]);
  const authTag = cipher.getAuthTag();
  // Layout: iv(12) + authTag(16) + encrypted
  return Buffer.concat([iv, authTag, encrypted]).toString('hex');
}

/** Decrypt a hex string back to an object. */
function decrypt(hex) {
  const key = getKey();
  const buf = Buffer.from(hex, 'hex');
  const iv = buf.subarray(0, 12);
  const authTag = buf.subarray(12, 28);
  const encrypted = buf.subarray(28);
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(authTag);
  const json = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return JSON.parse(json.toString('utf8'));
}

/** Persist OAuth tokens to an encrypted file. */
function saveTokens(tokens) {
  const dir = path.dirname(TOKENS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(TOKENS_FILE, encrypt(tokens), 'utf8');
}

/** Load OAuth tokens from the encrypted file, or return null. */
function loadTokens() {
  if (!fs.existsSync(TOKENS_FILE)) return null;
  try {
    return decrypt(fs.readFileSync(TOKENS_FILE, 'utf8'));
  } catch {
    return null;
  }
}

module.exports = { saveTokens, loadTokens };
