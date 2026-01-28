import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// In-memory storage for IP visit tracking per page
const ipPageVisits = new Map<string, number>();

async function getGeolocation(ip: string) {
  try {
    if (!ip || ip === 'unknown' || ip === '::1' || ip.startsWith('127.') || ip.startsWith('10.') || ip.startsWith('192.168.')) {
      return null;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    const data = await response.json();
    return data.status === 'success' ? {
      country: data.country,
      city: data.city,
      region: data.regionName,
      isp: data.isp
    } : null;
  } catch (error) {
    console.error('Geolocation error:', error instanceof Error ? error.message : 'Unknown');
    return null;
  }
}

function getPageInfo(pageName: string) {
  const pageMap: Record<string, { emoji: string; title: string }> = {
    'index': { emoji: '🏠', title: 'Home Page' },
    'about-me': { emoji: '👤', title: 'About Me Page' },
    'contact': { emoji: '📧', title: 'Contact Page' },
    'past-works': { emoji: '💼', title: 'Past Works Page' }
  };
  return pageMap[pageName] || { emoji: '📄', title: 'Unknown Page' };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { 
    firstName, email, whatsapp, notificationType, 
    productName, productPrice, productCategory, productUrl, 
    chatMessage, language, whatsappClickData, pageName, pageUrl 
  } = req.body;

  const forwarded = req.headers['x-forwarded-for'];
  const clientIP = (typeof forwarded === 'string' ? forwarded.split(',')[0] : 'unknown').trim();
  const geolocation = await getGeolocation(clientIP);

  // Track visits
  const visitKey = `${clientIP}-${pageName || 'unknown'}`;
  const visitNumber = (ipPageVisits.get(visitKey) || 0) + 1;
  ipPageVisits.set(visitKey, visitNumber);

  let totalVisits = 0;
  ipPageVisits.forEach((count, key) => { if (key.startsWith(clientIP)) totalVisits += count; });

  const isPageVisit = notificationType === 'page_visit';
  const isCatalog = notificationType === 'catalog_download';

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    let subject = '';
    let html = '';

    const loc = geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country}` : 'Unknown';
    const time = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    if (isPageVisit) {
      const info = getPageInfo(pageName);
      subject = `${info.emoji} Visitor Report: ${info.title}`;
      html = `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="border-bottom: 2px solid #8B7355; padding-bottom: 10px;">Mangala Living Intelligence</h2>
          <p><strong>Page:</strong> ${info.title} (${pageUrl || 'N/A'})</p>
          <p><strong>Visits:</strong> ${visitNumber} (this page) | ${totalVisits} (total)</p>
          <p><strong>Location:</strong> ${loc}</p>
          <p><strong>IP:</strong> ${clientIP}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p style="color: #666; font-size: 12px;">Device: ${req.headers['user-agent']}</p>
        </div>
      `;
    } else if (isCatalog || notificationType === 'order_now' || notificationType === 'whatsapp_click' || notificationType === 'chatbot_lead' || notificationType === 'chatbot_message') {
      subject = `Mangala Notification: ${notificationType.replace('_', ' ').toUpperCase()}`;
      html = `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #8B7355;">New ${notificationType.replace('_', ' ')}</h2>
          <p><strong>Name:</strong> ${firstName || 'Visitor'}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
          ${productName ? `<p><strong>Product:</strong> ${productName}</p>` : ''}
          ${chatMessage ? `<p><strong>Message:</strong> ${chatMessage}</p>` : ''}
          <hr />
          <p><strong>Location:</strong> ${loc}</p>
          <p><strong>IP:</strong> ${clientIP}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
      `;
    }

    if (!subject) return res.status(400).json({ error: 'Invalid notification type' });

    // Try sending to recipients
    // NOTE: Using a single string or array. If one fails, it might fail the whole thing.
    // I'll try sending separately to ensure at least one arrives if there are restriction issues.
    const recipients = ['rioanggaraclub@gmail.com', 'lifewithmangala@gmail.com'];
    const results = [];

    for (const recipient of recipients) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Mangala Living <onboarding@resend.dev>',
          to: recipient,
          subject: subject,
          html: html,
        });
        results.push({ recipient, success: !error, error });
      } catch (err) {
        results.push({ recipient, success: false, error: err instanceof Error ? err.message : 'Failed' });
      }
    }

    const success = results.some(r => r.success);
    if (!success) {
      console.error('All email sends failed:', results);
      return res.status(500).json({ error: 'Failed to send emails', details: results });
    }

    return res.status(200).json({ success: true, results });

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Internal error' });
  }
}
