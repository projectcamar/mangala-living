import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, email, whatsapp } = req.body;

  // Validate input
  if (!firstName || !email) {
    return res.status(400).json({ error: 'First name and email are required' });
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

    const emailData = {
      from: 'Mangala Living <onboarding@resend.dev>', // Will be replaced with verified domain
      to: 'rioanggaraclub@gmail.com',
      subject: `New Catalog Download: ${firstName}`,
      html: `
        <h2>New Catalog Download Request</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${whatsapp ? `<p><strong>WhatsApp Number:</strong> ${whatsapp}</p>` : ''}
        <p><strong>Downloaded at:</strong> ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</p>
      `,
      text: `
        New Catalog Download Request
        
        First Name: ${firstName}
        Email: ${email}
        ${whatsapp ? `WhatsApp Number: ${whatsapp}` : ''}
        Downloaded at: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
      `
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
