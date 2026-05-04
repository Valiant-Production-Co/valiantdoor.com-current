'use strict';

const { Router } = require('express');

const router = Router();

/**
 * POST /webhooks/botpress
 *
 * Optional inbound webhook from Botpress.  For now, log the payload and
 * acknowledge with 200.  Extend this handler to take action (e.g., update a
 * booking status, send a notification) once the Botpress flow is configured.
 */
router.post('/webhooks/botpress', (req, res) => {
  console.log('[webhooks/botpress] received payload:', JSON.stringify(req.body));
  return res.status(200).json({ ok: true, received: true });
});

module.exports = router;
