const nodemailer = require('nodemailer');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  // CORS: allow frontend (same origin or Vercel preview)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    if (!email || !emailRegex.test(String(email).trim())) {
      return res.status(400).json({ success: false, message: 'Valid email is required' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message is required' });
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    if (!user || !pass) {
      console.error('Missing EMAIL_USER or EMAIL_PASS in environment');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please set EMAIL_USER and EMAIL_PASS in Vercel.',
      });
    }

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: { user, pass },
    });

    const to = process.env.CONTACT_EMAIL || 'masabyasin@gmail.com';
    const safe = (s) => String(s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const mailOptions = {
      from: user,
      to,
      replyTo: email.trim(),
      subject: subject && subject.trim() ? safe(subject) : `Portfolio Contact: ${safe(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safe(name)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Subject:</strong> ${subject ? safe(subject) : 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${safe(message).replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email. Please try again later.',
    });
  }
}
