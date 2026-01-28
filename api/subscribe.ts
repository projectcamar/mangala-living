import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory storage for IP visit tracking per page
// Note: This is ephemeral on Vercel and will reset periodically
const ipPageVisits = new Map<string, number>();

// Function to get geolocation from IP address
async function getGeolocation(ip: string) {
  try {
    // Skip geolocation for unknown or local IPs
    if (!ip || ip === 'unknown' || ip === '::1' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
      return null;
    }

    // Use ip-api.com for free geolocation lookup (45 req/min limit)
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`);
    const data = await response.json();

    if (data.status === 'success') {
      return {
        country: data.country,
        countryCode: data.countryCode,
        region: data.regionName,
        city: data.city,
        zip: data.zip,
        latitude: data.lat,
        longitude: data.lon,
        timezone: data.timezone,
        isp: data.isp,
        org: data.org,
        as: data.as
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return null;
  }
}

// Function to get page emoji and title
function getPageInfo(pageName: string) {
  const pageMap: Record<string, { emoji: string; title: string; description: string }> = {
    'index': { emoji: '🏠', title: 'Home Page', description: 'Main landing page' },
    'about-me': { emoji: '👤', title: 'About Me Page', description: 'Personal information page' },
    'contact': { emoji: '📧', title: 'Contact Page', description: 'Contact information page' },
    'past-works': { emoji: '💼', title: 'Past Works Page', description: 'Portfolio and projects page' }
  };
  return pageMap[pageName] || { emoji: '📄', title: 'Unknown Page', description: 'Page visit' };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, email, whatsapp, notificationType, productName, productPrice, productCategory, productUrl, firstMessage, chatMessage, language, whatsappClickData, pageName, pageUrl } = req.body;

  // Get the visitor's IP address
  const forwarded = req.headers['x-forwarded-for'];
  const visitorIPFull = typeof forwarded === 'string' ? forwarded : (Array.isArray(forwarded) ? forwarded[0] : 'unknown');
  const clientIP = visitorIPFull.split(',')[0].trim();

  // Get geolocation data
  const geolocation = await getGeolocation(clientIP);

  // Track visits (ephemeral)
  const visitKey = `${clientIP}-${pageName || 'unknown'}`;
  const currentVisits = ipPageVisits.get(visitKey) || 0;
  const visitNumber = currentVisits + 1;
  ipPageVisits.set(visitKey, visitNumber);

  // Get total visits across all pages for this IP
  let totalVisits = 0;
  ipPageVisits.forEach((count, key) => {
    if (key.startsWith(clientIP)) {
      totalVisits += count;
    }
  });

  // For order_now and whatsapp_click notifications, firstName and email are optional (can be 'Visitor' and 'unknown@email.com')
  // For catalog_download, chatbot_lead, and chatbot_message, they are required
  const isOrderNow = notificationType === 'order_now';
  const isCatalogDownload = notificationType === 'catalog_download';
  const isChatbotLead = notificationType === 'chatbot_lead';
  const isChatbotMessage = notificationType === 'chatbot_message';
  const isWhatsAppClick = notificationType === 'whatsapp_click';
  const isPageVisit = notificationType === 'page_visit';

  // Validate input based on notification type
  if ((isCatalogDownload || isChatbotLead || isChatbotMessage) && (!firstName || !email)) {
    return res.status(400).json({ error: 'First name and email are required' });
  }

  // Email validation (only if email is provided and not the placeholder)
  if (email && email !== 'unknown@email.com') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  }

  try {
    // Send email using Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // Format email content based on notification type
    let subject = '';
    let htmlContent = '';
    let textContent = '';

    // Generate email templates with Mangala Living styling
    if (isOrderNow) {
      subject = `New Order Now Click: ${productName || 'Product'}`;
      htmlContent = `
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Mangala Living</h1>
                      <p style="margin: 8px 0 0; color: #8B7355; font-size: 14px; font-weight: 500;">New Order Now Notification</p>
                    </td>
                  </tr>
                  
                  <!-- Content Card -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 8px; padding: 30px;">
                        <h2 style="margin: 0 0 25px; color: #2c2c2c; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 3px solid #8B7355; padding-bottom: 12px;">Product Information</h2>
                        
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Product Name:</div>
                              <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">${productName || 'N/A'}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Category:</div>
                              <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">${productCategory || 'N/A'}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Price:</div>
                              <div style="display: inline-block; color: #8B7355; font-weight: 700; font-size: 16px;">${productPrice || 'N/A'}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Product URL:</div>
                              <div style="display: inline-block;">
                                <a href="${productUrl || '#'}" style="color: #8B7355; text-decoration: none; font-weight: 600; font-size: 14px; border-bottom: 2px solid #8B7355; padding-bottom: 2px;">View Product</a>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Timestamp Card -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #8B7355; border-radius: 6px; padding: 20px; margin-top: 25px;">
                        <div style="color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Timestamp</div>
                        <div style="color: #2c2c2c; font-size: 15px; font-weight: 500;">${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
                      <p style="margin: 0; color: #666; font-size: 12px;">© ${new Date().getFullYear()} Mangala Living. All rights reserved.</p>
                      <p style="margin: 8px 0 0; color: #999; font-size: 11px;">Industrial Furniture | Custom Made | Jakarta & Bekasi</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
      textContent = `
        Product URL: ${productUrl || 'N/A'}
        Clicked at: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
        Visitor IP: ${clientIP}
        Location: ${geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country}` : 'Unknown'}
      `;
    } else if (isChatbotLead) {
      // Chatbot Lead
      subject = `New Chatbot Lead: ${firstName}`;
      htmlContent = `
        <!DOCTYPE html>
          <html lang="id">
            <head>
            <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel = "stylesheet">
                      </head>
                      <body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
                        <table width="100%" cellpadding="0" cellspacing="0" style = "background-color: #f8f9fa; padding: 40px 20px;">
                          <tr>
                          <td align="center">
                            <table width="600" cellpadding="0" cellspacing="0" style = "max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                              <!--Header -->
                                <tr>
                                <td style="background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%); padding: 30px; text-align: center;">
                                  <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;"> Mangala Living</h1>
                    <p style="margin: 8px 0 0; color: #8B7355; font-size: 14px; font-weight: 500;">New Chatbot Lead</p>
                                      </td>
                                      </tr>

                                      <!-- Content Card -->
                                        <tr>
                                        <td style="padding: 40px 30px;">
                                          <div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 8px; padding: 30px;">
                                            <h2 style="margin: 0 0 25px; color: #2c2c2c; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 3px solid #8B7355; padding-bottom: 12px;">Lead Information</h2>

                                              < table width = "100%" cellpadding = "0" cellspacing = "0">
                                                <tr>
                                                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                                                  <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;"> Name: </div>
                                                    <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">${firstName}</div>
                                                      </td>
                                                      </tr>
                                                      <tr>
                                                      <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                                                        <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;"> Email: </div>
                                                          <div style="display: inline-block;">
                                                            <a href="mailto:${email}" style="color: #8B7355; text-decoration: none; font-weight: 600; font-size: 15px; border-bottom: 2px solid #8B7355; padding-bottom: 2px;"> ${email} </a>
                                                              </div>
                                                              </td>
                                                              </tr>
                                                              <tr>
                                                              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                                                                <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;"> Language: </div>
                                                                  <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;"> ${language === 'id' ? 'Indonesian' : 'English'} </div>
                                                                    </td>
                                                                    </tr>
                          ${firstMessage ? `
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px; margin-bottom: 8px;">First Message:</div>
                              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; color: #2c2c2c; font-size: 14px; line-height: 1.6; border-left: 3px solid #8B7355;">${firstMessage}</div>
                            </td>
                          </tr>
                          ` : ''
        }
      </table>
        </div>

        <!-- Timestamp Card -->
          <div style="background-color: #f8f9fa; border-left: 4px solid #8B7355; border-radius: 6px; padding: 20px; margin-top: 25px;">
            <div style="color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Submitted At </div>
              <div style="color: #2c2c2c; font-size: 15px; font-weight: 500;"> ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })} </div>
                </div>
                </td>
                </tr>

                <!-- Footer -->
                  <tr>
                  <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
                    <p style="margin: 0; color: #666; font-size: 12px;">© ${new Date().getFullYear()} Mangala Living.All rights reserved.</p>
                      <p style="margin: 8px 0 0; color: #999; font-size: 11px;"> Industrial Furniture | Custom Made | Jakarta & Bekasi </p>
                        </td>
                        </tr>
                        </table>
                        </td>
                        </tr>
                        </table>
                        </body>
                        </html>
                          `;
      textContent = `
      Language: ${language === 'id' ? 'Indonesian' : 'English'}
        ${firstMessage ? `First Message: ${firstMessage}` : ''}
        Submitted at: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
        Visitor IP: ${clientIP}
      Location: ${geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country}` : 'Unknown'}
      `;
    } else if (isChatbotMessage) {
      // Chatbot Message
      subject = `Chatbot Message from ${firstName}`;
      htmlContent = `
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #25D366, #128C7E); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Mangala Living</h1>
                      <p style="margin: 8px 0 0; color: #ffffff; font-size: 14px; font-weight: 500;">Chatbot Message from Lead</p>
                    </td>
                  </tr>
                  
                  <!-- Content Card -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 8px; padding: 30px;">
                        <h2 style="margin: 0 0 25px; color: #2c2c2c; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 3px solid #25D366; padding-bottom: 12px;">Lead Information</h2>
                        
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Name:</div>
                              <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">${firstName}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Email:</div>
                              <div style="display: inline-block;">
                                <a href="mailto:${email}" style="color: #25D366; text-decoration: none; font-weight: 600; font-size: 15px; border-bottom: 2px solid #25D366; padding-bottom: 2px;">${email}</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Language:</div>
                              <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">${language === 'id' ? 'Indonesian' : 'English'}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px; margin-bottom: 8px;">Message:</div>
                              <div style="background-color: #f0f7f4; padding: 15px; border-radius: 6px; color: #2c2c2c; font-size: 14px; line-height: 1.6; border-left: 3px solid #25D366;">${chatMessage}</div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Timestamp Card -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #25D366; border-radius: 6px; padding: 20px; margin-top: 25px;">
                        <div style="color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Sent At</div>
                        <div style="color: #2c2c2c; font-size: 15px; font-weight: 500;">${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
                      <p style="margin: 0; color: #666; font-size: 12px;">© ${new Date().getFullYear()} Mangala Living. All rights reserved.</p>
                      <p style="margin: 8px 0 0; color: #999; font-size: 11px;">Industrial Furniture | Custom Made | Jakarta & Bekasi</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
      textContent = `
        Language: ${language === 'id' ? 'Indonesian' : 'English'}
        Message: ${chatMessage}
        Sent at: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
        Visitor IP: ${clientIP}
        Location: ${geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country}` : 'Unknown'}
      `;
    } else if (isWhatsAppClick) {
      // WhatsApp Click Notification
      const clickSource = whatsappClickData?.source || 'Unknown';
      const clickPage = whatsappClickData?.page || 'Unknown';
      const clickTime = whatsappClickData?.timestamp ? new Date(whatsappClickData.timestamp).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) : new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

      subject = `WhatsApp Link Clicked: ${clickSource} `;
      htmlContent = `
        <!DOCTYPE html>
          <html lang="id">
            <head>
            <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel = "stylesheet">
                      </head>
                      <body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
                        <table width="100%" cellpadding="0" cellspacing="0" style = "background-color: #f8f9fa; padding: 40px 20px;">
                          <tr>
                          <td align="center">
                            <table width="600" cellpadding="0" cellspacing="0" style = "max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                              <!--Header -->
                                <tr>
                                <td style="background: linear-gradient(135deg, #25D366, #128C7E); padding: 30px; text-align: center;">
                                  <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;"> Mangala Living </h1>
                                    < p style = "margin: 8px 0 0; color: #ffffff; font-size: 14px; font-weight: 500;">WhatsApp Link Clicked 📱</p>
                                      </td>
                                      </tr>

                                      <!-- Content Card -->
                                        <tr>
                                        <td style="padding: 40px 30px;">
                                          <div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 8px; padding: 30px;">
                                            <h2 style="margin: 0 0 25px; color: #2c2c2c; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 3px solid #25D366; padding-bottom: 12px;">Click Information </h2>

                                              < table width = "100%" cellpadding = "0" cellspacing = "0">
                                                <tr>
                                                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                                                  <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;"> Source: </div>
                                                    <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;"> ${clickSource} </div>
                                                      </td>
                                                      </tr>
                                                      <tr>
                                                      <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                                                        <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;"> Page URL: </div>
                                                          <div style="display: inline-block;">
                                                            <a href="${clickPage}" style = "color: #25D366; text-decoration: none; font-weight: 600; font-size: 14px; border-bottom: 2px solid #25D366; padding-bottom: 2px; word-break: break-all;">${clickPage} </a>
                                                              </div>
                                                              </td>
                                                              </tr>
                                                              <tr>
                                                              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                                                                <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;"> Language: </div>
                                                                  <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;"> ${whatsappClickData?.language || 'Unknown'} </div>
                                                                    </td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td style="padding: 12px 0;">
                                                                      <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;"> WhatsApp Number: </div>
                                                                        <div style="display: inline-block;">
                                                                          <a href="https://wa.me/+6288801146881" style = "color: #25D366; text-decoration: none; font-weight: 700; font-size: 16px; border-bottom: 2px solid #25D366; padding-bottom: 2px;">+6288801146881 </a>
                                                                            </div>
                                                                            </td>
                                                                            </tr>
                                                                            </table>
                                                                            </div>

                                                                            <!-- Timestamp Card -->
                                                                              <div style="background-color: #f0f7f4; border-left: 4px solid #25D366; border-radius: 6px; padding: 20px; margin-top: 25px;">
                                                                                <div style="color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Clicked At </div>
                                                                                  <div style="color: #2c2c2c; font-size: 15px; font-weight: 500;"> ${clickTime} </div>
                                                                                    </div>

                                                                                    < !--Additional Info if available-- >
                                                                                      ${whatsappClickData?.productName ? `
                      <div style="background-color: #fff8e1; border-left: 4px solid #FFC107; border-radius: 6px; padding: 20px; margin-top: 15px;">
                        <div style="color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Related Product</div>
                        <div style="color: #2c2c2c; font-size: 15px; font-weight: 500;">${whatsappClickData.productName}</div>
                      </div>
                      ` : ''
        }
      </td>
        </tr>

        <!-- Footer -->
          <tr>
          <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
            <p style="margin: 0; color: #666; font-size: 12px;">© ${new Date().getFullYear()} Mangala Living.All rights reserved.</p>
              <p style="margin: 8px 0 0; color: #999; font-size: 11px;"> Industrial Furniture | Custom Made | Jakarta & Bekasi </p>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </table>
                </body>
                </html>
                  `;
      textContent = `
        WhatsApp Number: +6288801146881
        ${whatsappClickData?.productName ? `Related Product: ${whatsappClickData.productName}` : ''}
        Clicked at: ${clickTime}
        Visitor IP: ${clientIP}
      Location: ${geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country}` : 'Unknown'}
      `;
    } else if (isCatalogDownload) {
      // Catalog download (default)
      subject = `New Catalog Download: ${firstName}`;
      htmlContent = `
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Mangala Living</h1>
                      <p style="margin: 8px 0 0; color: #8B7355; font-size: 14px; font-weight: 500;">New Catalog Download Request</p>
                    </td>
                  </tr>
                  
                  <!-- Content Card -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 8px; padding: 30px;">
                        <h2 style="margin: 0 0 25px; color: #2c2c2c; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 3px solid #8B7355; padding-bottom: 12px;">Customer Information</h2>
                        
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">First Name:</div>
                              <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">${firstName}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Email:</div>
                              <div style="display: inline-block;">
                                <a href="mailto:${email}" style="color: #8B7355; text-decoration: none; font-weight: 600; font-size: 15px; border-bottom: 2px solid #8B7355; padding-bottom: 2px;">${email}</a>
                              </div>
                            </td>
                          </tr>
                          ${whatsapp ? `
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">WhatsApp:</div>
                              <div style="display: inline-block;">
                                <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" style="color: #25D366; text-decoration: none; font-weight: 600; font-size: 15px; border-bottom: 2px solid #25D366; padding-bottom: 2px;">${whatsapp}</a>
                              </div>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                      </div>
                      
                      <!-- Timestamp Card -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #8B7355; border-radius: 6px; padding: 20px; margin-top: 25px;">
                        <div style="color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Downloaded At</div>
                        <div style="color: #2c2c2c; font-size: 15px; font-weight: 500;">${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
                      <p style="margin: 0; color: #666; font-size: 12px;">© ${new Date().getFullYear()} Mangala Living. All rights reserved.</p>
                      <p style="margin: 8px 0 0; color: #999; font-size: 11px;">Industrial Furniture | Custom Made | Jakarta & Bekasi</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
      textContent = `
        Email: ${email}
        ${whatsapp ? `WhatsApp Number: ${whatsapp}` : ''}
        Downloaded at: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
        Visitor IP: ${clientIP}
        Location: ${geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country}` : 'Unknown'}
      `;
    } else if (isPageVisit) {
      // Page Visit Notification
      const pageInfo = getPageInfo(pageName);
      const timestamp = new Date().toLocaleString('id-ID', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Asia/Jakarta'
      });

      subject = `${pageInfo.emoji} New Visitor on ${pageInfo.title} - Mangala Living`;
      htmlContent = `
        <!DOCTYPE html>
          <html>
          <head>
          <style>
          body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%); color: white; padding: 25px; border-radius: 12px 12px 0 0; text-align: center; }
            .header h2 { margin: 0; font-size: 24px; letter-spacing: 1px; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
            .info-box { background: white; padding: 15px; margin: 12px 0; border-radius: 8px; border: 1px solid #f0f0f0; border-left: 4px solid #8B7355; }
            .info-label { font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
            .info-value { color: #2c2c2c; font-size: 15px; margin-top: 6px; }
            .highlight-box { background: #fdfaf6; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #8B7355; }
            .footer { background: #f8f9fa; color: #999; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 12px 12px; border-top: 1px solid #f0f0f0; }
            .page-icon { font-size: 48px; text-align: center; margin: 10px 0; }
            .stats-container { display: flex; gap: 12px; margin: 20px 0; }
            .stat-box { flex: 1; background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #f0f0f0; }
            .stat-number { font-size: 26px; font-weight: bold; color: #8B7355; }
            .stat-label { font-size: 11px; color: #666; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
      </style>
        </head>
        <body>
        <div class="container">
          <div class="header">
            <h2>MANGALA LIVING </h2>
              < p style = "margin: 5px 0 0; font-size: 14px; opacity: 0.8;">Visitor Intelligence Report </p>
                </div>
                < div class="content">
                  <div class="page-icon">${pageInfo.emoji} </div>

                    < div class="highlight-box">
                      <div class="info-label">📊 Page Visit Notification </div>
                        < div class="info-value">A visitor accessed < strong > ${pageInfo.title} </strong> on Mangala Living website.</div>
                          </div>

                          < div style = "display: flex; gap: 10px; margin: 15px 0;">
                            <div class="stat-box" style = "width: 50%; display: inline-block;">
                              <div class="stat-number">#${visitNumber} </div>
                                < div class="stat-label">This Page </div>
                                  </div>
                                  < div class="stat-box" style = "width: 50%; display: inline-block;">
                                    <div class="stat-number">${totalVisits} </div>
                                      < div class="stat-label">All Pages </div>
                                        </div>
                                        </div>

                                        < div class="info-box">
                                          <div class="info-label">🌐 Page Information </div>
                                            < div class="info-value">
                                              <strong>Title: </strong> ${pageInfo.title}<br>
                                                < strong > Description: </strong> ${pageInfo.description}<br>
                                                  < strong > URL: </strong> ${pageUrl || 'mangala-living.com/' + pageName}
                                                    </div>
                                                    </div>

                                                    < div class="info-box">
                                                      <div class="info-label">📍 IP Address </div>
                                                        < div class="info-value">
                                                          <strong>Client IP: </strong> ${clientIP}<br>
                                                            < span style = "font-size: 12px; color: #888;">Full Chain: ${visitorIPFull} </span>
                                                              </div>
                                                              </div>
              
              ${geolocation ? `
              <div class="info-box" style="border-left-color: #25D366;">
                <div class="info-label">🌍 Visitor Geolocation</div>
                <div class="info-value">
                  <strong>📍 Location:</strong> ${geolocation.city || 'Unknown'}${geolocation.region ? ', ' + geolocation.region : ''}, ${geolocation.country || 'Unknown'} ${geolocation.countryCode ? '(' + geolocation.countryCode + ')' : ''}<br>
                  ${geolocation.zip ? `<strong>📮 ZIP:</strong> ${geolocation.zip}<br>` : ''}
                  ${geolocation.timezone ? `<strong>🕐 Timezone:</strong> ${geolocation.timezone}<br>` : ''}
                  ${geolocation.latitude && geolocation.longitude ? `<strong>📌 Coordinates:</strong> ${geolocation.latitude}, ${geolocation.longitude}<br>` : ''}
                  ${geolocation.isp ? `<strong>🌐 ISP:</strong> ${geolocation.isp}<br>` : ''}
                  ${geolocation.org ? `<strong>🏢 Organization:</strong> ${geolocation.org}` : ''}
                </div>
              </div>
              ` : `
              <div class="info-box" style="background: #fff3cd; border-left-color: #ffc107;">
                <div class="info-label">⚠️ Geolocation Info</div>
                <div class="info-value">Geolocation data could not be retrieved for IP: ${clientIP}</div>
              </div>
              `}

      <div class="info-box">
        <div class="info-label">🕐 Timestamp </div>
          < div class="info-value">${timestamp} </div>
            </div>

            < div class="info-box">
              <div class="info-label">🖥️ Device / UA </div>
                < div class="info-value" style = "font-size: 12px; word-break: break-all;">${req.headers['user-agent'] || 'Unknown'} </div>
                  </div>

                  < div class="info-box">
                    <div class="info-label">📱 Session Info </div>
                      < div class="info-value">
                        <strong>Referrer: </strong> ${req.headers['referer'] || 'Direct visit'}<br>
                          < strong > Language: </strong> ${req.headers['accept-language'] || 'Unknown'}
                            </div>
                            </div>
                            </div>
                            < div class="footer">
              © ${new Date().getFullYear()} Mangala Living Automation<br>
              You're receiving this because a page visit was detected.
        </div>
        </div>
        </body>
        </html>
          `;
      textContent = `
        MANGALA LIVING - Visitor Notification

      Page: ${pageInfo.title}
      URL: ${pageUrl || 'mangala-living.com/' + pageName}
      IP: ${clientIP}
      Location: ${geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country}` : 'Unknown'}
        Visit Count: ${visitNumber} to this page, ${totalVisits} total.
        Timestamp: ${timestamp}
      `;
      textContent = textContent; // No changes needed here, just keeping context
    }

    if (!subject || !htmlContent) {
      console.error('Invalid notification type or missing content');
      return res.status(400).json({ error: 'Invalid notification type' });
    }

    const emailData = {
      from: 'Mangala Living <onboarding@resend.dev>', // Will be replaced with verified domain
      to: ['rioanggaraclub@gmail.com', 'lifewithmangala@gmail.com'],
      subject: subject,
      html: htmlContent,
      text: textContent
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    return res.status(200).json({
      success: true,
      message: 'Subscription successful'
    });
  } catch (error) {
    console.error('Error sending subscription email:', error);
    return res.status(500).json({
      error: 'Failed to process subscription',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
