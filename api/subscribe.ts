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
      isp: data.isp,
      zip: data.zip,
      timezone: data.timezone,
      lat: data.lat,
      lon: data.lon,
      org: data.org,
      countryCode: data.countryCode
    } : null;
  } catch (error) {
    console.error('Geolocation error:', error instanceof Error ? error.message : 'Unknown');
    return null;
  }
}
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    firstName, email, whatsapp, notificationType,
    productName, productPrice, productCategory, productUrl,
    chatMessage, language, whatsappClickData, pageName, pageUrl,
    catalogLanguage
  } = req.body;

  console.log(`[SUBSCRIPTION] Type: ${notificationType}, Email: ${email}, Name: ${firstName}, Lang: ${catalogLanguage || 'N/A'}`);

  const forwarded = req.headers['x-forwarded-for'];
  const clientIP = (typeof forwarded === 'string' ? forwarded.split(',')[0] : 'unknown').trim();
  const geolocation = await getGeolocation(clientIP);

  console.log(`[SUBSCRIPTION] IP: ${clientIP}, Geolocation: ${geolocation ? 'Found' : 'Not Found'}`);

  // Track visits
  const visitKey = `${clientIP}-${pageName || 'unknown'}`;
  const visitNumber = (ipPageVisits.get(visitKey) || 0) + 1;
  ipPageVisits.set(visitKey, visitNumber);

  let totalVisits = 0;
  ipPageVisits.forEach((count, key) => { if (key.startsWith(clientIP)) totalVisits += count; });

  const isCatalog = notificationType === 'catalog_download';

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error('[SUBSCRIPTION] RESEND_API_KEY is missing!');
      return res.status(500).json({ error: 'Email configuration missing' });
    }

    const resend = new Resend(RESEND_API_KEY);

    let subject = '';
    let html = '';

    const loc = geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country} (${geolocation.countryCode})` : 'Unknown';
    const time = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }) + ' WIB';

    const renderCommonDetails = () => `
      <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
        <h3 style="color: #8B7355; margin-bottom: 10px;">📍 Visitor IP Address</h3>
        <p style="margin: 5px 0;"><strong>Client IP:</strong> ${clientIP}</p>
        <p style="margin: 5px 0; color: #666; font-size: 13px;"><strong>Full Chain:</strong> ${req.headers['x-forwarded-for'] || clientIP}</p>
        
        <h3 style="color: #8B7355; margin-bottom: 10px; margin-top: 20px;">🌍 Visitor Geolocation</h3>
        <p style="margin: 5px 0;"><strong>📍 Location:</strong> ${loc}</p>
        <p style="margin: 5px 0;"><strong>📮 ZIP:</strong> ${geolocation?.zip || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>🕐 Timezone:</strong> ${geolocation?.timezone || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>📌 Coordinates:</strong> ${geolocation?.lat}, ${geolocation?.lon}</p>
        <p style="margin: 5px 0;"><strong>🌐 ISP:</strong> ${geolocation?.isp || 'Unknown'}</p>
        <p style="margin: 5px 0;"><strong>🏢 Organization:</strong> ${geolocation?.org || 'N/A'}</p>
        
        <h3 style="color: #8B7355; margin-bottom: 10px; margin-top: 20px;">🕐 Timestamp</h3>
        <p style="margin: 5px 0;">${time}</p>
        
        <h3 style="color: #8B7355; margin-bottom: 10px; margin-top: 20px;">🖥️ User Agent</h3>
        <p style="margin: 5px 0; font-size: 13px; color: #666;">${req.headers['user-agent']}</p>
        
        <h3 style="color: #8B7355; margin-bottom: 10px; margin-top: 20px;">📱 Device Information</h3>
        <p style="margin: 5px 0;"><strong>Referrer:</strong> ${req.headers['referer'] || pageUrl || 'Direct'}</p>
        <p style="margin: 5px 0;"><strong>Accept Language:</strong> ${req.headers['accept-language'] || 'Unknown'}</p>
      </div>
      <div style="margin-top: 30px; border-top: 2px solid #8B7355; padding-top: 15px; font-size: 12px; color: #777;">
        <p>This is an automated notification from lifewithmangala.com</p>
        <p>You're receiving this because a visitor interacted with your website.</p>
      </div>
    `;

    if (isCatalog || notificationType === 'order_now' || notificationType === 'whatsapp_click' || notificationType === 'chatbot_lead' || notificationType === 'chatbot_message' || notificationType === 'subscription') {
      subject = `Mangala Notification: ${notificationType.replace('_', ' ').toUpperCase()}`;
      html = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 25px; color: #333; line-height: 1.6; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #8B7355; border-bottom: 2px solid #8B7355; padding-bottom: 10px;">🔔 New ${notificationType.replace('_', ' ').toUpperCase()}</h2>
          <div style="margin-top: 20px;">
            <p style="font-size: 16px;"><strong>Name:</strong> ${firstName || 'Visitor'}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email || 'N/A'}</p>
            ${whatsapp ? `<p style="font-size: 16px;"><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
            ${catalogLanguage ? `<p style="font-size: 16px; color: #8B7355;"><strong>Catalog Language:</strong> ${catalogLanguage.toUpperCase()}</p>` : ''}
            ${productName ? `<p style="font-size: 16px;"><strong>Product:</strong> ${productName}</p>` : ''}
            ${chatMessage ? `<p style="font-size: 16px; background: #f9f9f9; padding: 10px; border-radius: 4px; border-left: 4px solid #8B7355;"><strong>Message:</strong><br/>${chatMessage}</p>` : ''}
          </div>
          
          ${renderCommonDetails()}
        </div>
      `;
    }

    if (!subject) {
      console.warn(`[SUBSCRIPTION] Invalid notification type: ${notificationType}`);
      return res.status(400).json({ error: 'Invalid notification type' });
    }

    const recipients = ['lifewithmangala@gmail.com'];
    const results = [];

    // 1. Send Admin Notification (Existing Logic)
    for (const recipient of recipients) {
      console.log(`[SUBSCRIPTION] Attempting to send notification to admin: ${recipient}`);
      try {
        const { data, error } = await resend.emails.send({
          from: 'Mangala Living <catalog@mangala-living.com>',
          to: recipient,
          subject: subject,
          html: html,
        });

        if (error) {
          console.error(`[SUBSCRIPTION] Resend notification error for ${recipient}:`, error);
          results.push({ recipient, success: false, error });
        } else {
          console.log(`[SUBSCRIPTION] Notification sent to ${recipient} successfully:`, data?.id);
          results.push({ recipient, success: true, id: data?.id });
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Unknown error';
        results.push({ recipient, success: false, error: errorMsg });
      }
    }

    // 2. Send Catalog Delivery Email to User (New Logic)
    if ((isCatalog || notificationType === 'subscription') && email && email.includes('@')) {
      console.log(`[SUBSCRIPTION] Attempting to send catalog to customer: ${email}`);

      const pdfBaseUrl = 'https://lifewithmangala.com/fonts/Mangala-Living-Catalog-2025';
      const langSuffix = catalogLanguage && catalogLanguage !== 'en' && catalogLanguage !== 'id'
        ? `-${catalogLanguage.toUpperCase()}`
        : '';
      const catalogUrl = `${pdfBaseUrl}${langSuffix}.pdf`;

      const userSubjectMap: Record<string, string> = {
        id: 'Katalog Mangala Living 2025 Anda',
        en: 'Your Mangala Living 2025 Catalog',
        ar: 'كتالوج مانجالا ليفينج 2025 الخاص بك',
        zh: '您的 2025 曼加拉生活目录',
        ja: '2025 マンガラリビングカタログ',
        ko: '2025 망갈라 리빙 카탈로그',
        es: 'Su Catálogo Mangala Living 2025',
        fr: 'Votre Catalogue Mangala Living 2025'
      };

      const userSubject = userSubjectMap[catalogLanguage || 'en'] || userSubjectMap['en'];

      const userHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #8B7355; margin: 0; letter-spacing: 2px;">MANGALA LIVING</h1>
            <p style="color: #999; text-transform: uppercase; font-size: 12px; margin-top: 5px;">Premium Industrial Furniture</p>
          </div>
          
          <h2 style="color: #444; border-bottom: 1px solid #f0f0f0; padding-bottom: 15px;">${firstName || 'Hello'},</h2>
          
          <p style="font-size: 16px;">
            ${catalogLanguage === 'id'
          ? 'Terima kasih telah menyatakan minat pada koleksi kami. Sesuai permintaan Anda, berikut adalah tautan untuk mengunduh Katalog Premium Mangala Living 2025 kami.'
          : 'Thank you for your interest in our collections. As requested, here is the link to download our Mangala Living 2025 Premium Catalog.'}
          </p>

          <div style="text-align: center; margin: 40px 0;">
            <a href="${catalogUrl}" style="background-color: #8B7355; color: white; padding: 15px 35px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              ${catalogLanguage === 'id' ? 'UNDUH KATALOG PDF' : 'DOWNLOAD PDF CATALOG'}
            </a>
          </div>

          <p style="font-size: 14px; color: #666; font-style: italic;">
            ${catalogLanguage === 'id'
          ? 'Jika tombol di atas tidak berfungsi, salin dan tempel tautan ini ke browser Anda:'
          : 'If the button above doesn\'t work, copy and paste this link into your browser:'}
            <br/>
            <a href="${catalogUrl}" style="color: #8B7355; text-decoration: none;">${catalogUrl}</a>
          </p>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #f0f0f0;">
            <p style="margin-bottom: 5px;"><strong>Best Regards,</strong></p>
            <p style="margin-top: 0; color: #8B7355;"><strong>Mangala Living Team</strong></p>
            <p style="font-size: 12px; color: #999;">
              Bekasi, West Java, Indonesia<br/>
              <a href="https://lifewithmangala.com" style="color: #999; text-decoration: none;">www.lifewithmangala.com</a>
            </p>
          </div>
        </div>
      `;

      try {
        const { data, error } = await resend.emails.send({
          from: 'Mangala Living <catalog@mangala-living.com>',
          to: email,
          subject: userSubject,
          html: userHtml,
        });

        if (error) {
          console.error(`[SUBSCRIPTION] Resend user delivery error:`, error);
        } else {
          console.log(`[SUBSCRIPTION] Catalog delivered to user successfully:`, data?.id);
        }
      } catch (err) {
        console.error(`[SUBSCRIPTION] User delivery crash:`, err);
      }
    }

    const success = results.some(r => r.success);
    return res.status(success ? 200 : 500).json({ success, results });

  } catch (error) {
    console.error('[SUBSCRIPTION] Handler crash:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
