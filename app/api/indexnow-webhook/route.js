import crypto from 'crypto';

function timingSafeEqualHex(a, b) {
  if (!a || !b) return false;
  const left = Buffer.from(String(a), 'utf8');
  const right = Buffer.from(String(b), 'utf8');
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

function verifyVercelSignature(rawBody, secret, signature) {
  if (!secret || !signature) return false;
  const expected = crypto.createHmac('sha1', secret).update(rawBody).digest('hex');
  return timingSafeEqualHex(expected, signature);
}

async function fetchText(url, redirectCount = 0) {
  if (redirectCount > 5) {
    throw new Error('Too many redirects');
  }

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'valiantdoor-indexnow-bot/1.0',
    },
  });

  if (response.status >= 300 && response.status < 400) {
    const location = response.headers.get('location');
    if (location) {
      const nextUrl = new URL(location, url).toString();
      return fetchText(nextUrl, redirectCount + 1);
    }
  }

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GET ${url} failed with ${response.status}: ${body.slice(0, 240)}`);
  }

  return response.text();
}

async function submitIndexNow({ reason, deploymentId, deploymentTarget }) {
  const host = process.env.INDEXNOW_HOST;
  const key = process.env.INDEXNOW_KEY;
  const keyLocation = process.env.INDEXNOW_KEY_LOCATION;
  const sitemapUrl = process.env.INDEXNOW_SITEMAP_URL || `https://${host}/sitemap.xml`;

  if (!host || !key || !keyLocation) {
    throw new Error('Missing IndexNow configuration environment variables.');
  }

  const sitemapXml = await fetchText(sitemapUrl);
  const urls = [];
  const seen = new Set();
  const matches = sitemapXml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi);

  for (const match of matches) {
    const value = match[1].trim();
    if (!value || seen.has(value)) continue;
    seen.add(value);
    urls.push(value);
  }

  if (!urls.length) {
    throw new Error(`No URLs found in sitemap: ${sitemapUrl}`);
  }

  const response = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList: urls,
    }),
  });

  if (![200, 202].includes(response.status)) {
    const body = await response.text();
    throw new Error(`IndexNow submission failed with ${response.status}: ${body.slice(0, 300)}`);
  }

  return {
    ok: true,
    reason,
    deploymentId: deploymentId || null,
    deploymentTarget: deploymentTarget || null,
    submittedCount: urls.length,
    statusCode: response.status,
    keyLocation,
    sampleUrls: urls.slice(0, 5),
  };
}

export async function POST(request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-vercel-signature');
    const webhookSecret = process.env.INDEXNOW_WEBHOOK_SECRET;

    if (!webhookSecret) {
      return Response.json({ error: 'Webhook secret is not configured' }, { status: 500 });
    }

    if (!verifyVercelSignature(rawBody, webhookSecret, signature)) {
      return Response.json({ error: 'Invalid webhook signature' }, { status: 401 });
    }

    const payload = rawBody ? JSON.parse(rawBody) : {};
    const event = String(request.headers.get('x-vercel-event') || payload.type || '').trim();
    const data = payload.payload || payload;
    const projectId = data.projectId || data.project?.id || null;
    const target = data.target || data.meta?.target || null;
    const deploymentId = data.id || data.deploymentId || null;
    const expectedProjectId = process.env.INDEXNOW_PROJECT_ID || null;

    if (event && event !== 'deployment.succeeded') {
      return Response.json({ ignored: true, reason: `Ignored event ${event}` }, { status: 202 });
    }

    if (expectedProjectId && projectId && expectedProjectId !== projectId) {
      return Response.json(
        {
          ignored: true,
          reason: 'Ignored different project',
          projectId,
        },
        { status: 202 }
      );
    }

    if (target && target !== 'production') {
      return Response.json(
        {
          ignored: true,
          reason: 'Ignored non-production deployment',
          target,
        },
        { status: 202 }
      );
    }

    const result = await submitIndexNow({
      reason: 'deployment.succeeded webhook',
      deploymentId,
      deploymentTarget: target,
    });

    return Response.json(result, { status: 202 });
  } catch (error) {
    return Response.json(
      {
        error: 'IndexNow auto-submit failed',
        detail: error.message,
      },
      { status: 500 }
    );
  }
}
