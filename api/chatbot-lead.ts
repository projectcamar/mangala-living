import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, firstMessage, language } = req.body;

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Send email using Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const subject = `New Chatbot Lead: ${name}`;
    const htmlContent = `
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
                    <p style="margin: 8px 0 0; color: #8B7355; font-size: 14px; font-weight: 500;">New Chatbot Lead</p>
                  </td>
                </tr>
                
                <!-- Content Card -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 8px; padding: 30px;">
                      <h2 style="margin: 0 0 25px; color: #2c2c2c; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 3px solid #8B7355; padding-bottom: 12px;">Lead Information</h2>
                      
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                            <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Name:</div>
                            <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">${name}</div>
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
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                            <div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">Language:</div>
                            <div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">${language === 'id' ? 'Indonesian' : 'English'}</div>
                          </td>
                        </tr>
                        ${firstMessage ? `
                        <tr>
                          <td style="padding: 12px 0;">
                            <div style="color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px; margin-bottom: 8px;">First Message:</div>
                            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; color: #2c2c2c; font-size: 14px; line-height: 1.6; border-left: 3px solid #8B7355;">${firstMessage}</div>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </div>
                    
                    <!-- Timestamp Card -->
                    <div style="background-color: #f8f9fa; border-left: 4px solid #8B7355; border-radius: 6px; padding: 20px; margin-top: 25px;">
                      <div style="color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Submitted At</div>
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
    
    const textContent = `
      New Chatbot Lead
      
      Name: ${name}
      Email: ${email}
      Language: ${language === 'id' ? 'Indonesian' : 'English'}
      ${firstMessage ? `First Message: ${firstMessage}` : ''}
      Submitted at: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
    `;

    const emailData = {
      from: 'Mangala Living <onboarding@resend.dev>',
      to: 'rioanggaraclub@gmail.com',
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
      message: 'Lead submitted successfully' 
    });
  } catch (error) {
    console.error('Error sending chatbot lead email:', error);
    return res.status(500).json({ 
      error: 'Failed to submit lead',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
