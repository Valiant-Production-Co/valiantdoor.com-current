# Valiant Hub – VM Backend

A lightweight Node.js/Express backend that serves as the **main integration hub** for Valiant Garage Door. It handles booking intake, syncs to Google Calendar, notifies Botpress, and provides a simple admin dashboard.

---

## Requirements

| Dependency | Minimum version |
|-----------|-----------------|
| Node.js   | 18 LTS or later |
| npm       | 9+              |

---

## Quick Start

### 1. Install dependencies

```bash
cd server/hub
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Open `.env` and fill in at minimum:

| Variable | Description |
|----------|-------------|
| `PORT` | Port to listen on (default `3001`) |
| `ADMIN_PASSWORD` | Password for the `/admin` page |
| `SESSION_SECRET` | Random 32+ char string for sessions |
| `ENCRYPTION_KEY` | 64-char hex string to encrypt OAuth tokens (generate below) |
| `GOOGLE_CLIENT_ID` | Google OAuth 2.0 client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth 2.0 client secret |
| `GOOGLE_REDIRECT_URI` | Must match the Authorized Redirect URI in Google Cloud Console |
| `GOOGLE_CALENDAR_ID` | Calendar ID for new events (`primary` or a specific calendar ID) |
| `BOTPRESS_WEBHOOK_URL` | Botpress incoming-webhook URL (leave blank to disable) |
| `HOUSECALLPRO_API_KEY` | HCP API key (leave blank; stub is in place) |

Generate `ENCRYPTION_KEY`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Set up Google OAuth (optional but recommended)

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → **APIs & Services** → **Credentials**.
2. Create an **OAuth 2.0 Client ID** (Web application).
3. Add an Authorized Redirect URI:
   ```
   https://YOUR_VM_DOMAIN/auth/google/callback
   ```
4. Copy the **Client ID** and **Client Secret** into `.env`.
5. After starting the server, visit `http://localhost:3001/auth/google` (or your domain) and authorize.

Tokens are encrypted and saved to `data/tokens.enc`.

### 4. Start the server

```bash
# Production
npm start

# Development (auto-restarts on file change, Node 18+)
npm run dev
```

---

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/bookings` | Submit a booking (JSON or form-encoded) |
| `GET` | `/admin` | Admin dashboard (password-protected) |
| `GET` | `/admin/login` | Admin login page |
| `GET` | `/auth/google` | Start Google OAuth flow |
| `GET` | `/auth/google/callback` | Google OAuth callback |
| `POST` | `/webhooks/botpress` | Inbound webhook from Botpress |
| `GET` | `/api/health` | Health check |

### Booking request body

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "925-555-0100",
  "address": "123 Main St, Pleasanton CA 94588",
  "service": "Spring Replacement",
  "preferred_time": "2026-06-15T10:00:00",
  "notes": "Two-car garage, torsion spring"
}
```

`name` and `service` are required.  At least one of `email` or `phone` is required.

---

## Running on a VM with a reverse proxy

### nginx example

```nginx
server {
    listen 80;
    server_name hub.yourdomain.com;

    location / {
        proxy_pass         http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

Add SSL with Certbot:

```bash
sudo certbot --nginx -d hub.yourdomain.com
```

### Run as a service (systemd)

Create `/etc/systemd/system/valiant-hub.service`:

```ini
[Unit]
Description=Valiant Hub
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/vm/server/hub
ExecStart=/usr/bin/node index.js
Restart=on-failure
EnvironmentFile=/var/www/vm/server/hub/.env
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now valiant-hub
sudo systemctl status valiant-hub
```

---

## Connecting the booking form on the website

The `public/quote/index.html` page includes a native booking form that POSTs to `/api/bookings`.  When the site is served from the VM, the form will reach the hub automatically.

If the site is hosted on Vercel and the hub runs on a separate VM, set the hub's public URL as the form's `action` attribute (or configure it via the `data-api-url` attribute).

---

## Data storage

Bookings are stored in `data/bookings.db` (SQLite, auto-created on first run).  OAuth tokens are stored encrypted in `data/tokens.enc`.

Both paths are excluded from version control via `.gitignore`.

---

## Environment variables reference

See [`.env.example`](.env.example) for the full list with descriptions.
