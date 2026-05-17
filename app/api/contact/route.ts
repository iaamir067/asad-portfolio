import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 1000);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const cleanData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to developer
    const developerEmail = {
      from: process.env.SMTP_FROM || 'noreply@asadbangash.com',
      to: process.env.CONTACT_EMAIL || 'asad@example.com',
      subject: `New Portfolio Contact: ${cleanData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${cleanData.name}</p>
        <p><strong>Email:</strong> ${cleanData.email}</p>
        <p><strong>Subject:</strong> ${cleanData.subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${cleanData.message.replace(/\n/g, '<br />')}</p>
      `,
      replyTo: cleanData.email,
    };

    // Confirmation email to user
    const userEmail = {
      from: process.env.SMTP_FROM || 'noreply@asadbangash.com',
      to: cleanData.email,
      subject: 'Message Received - Asad Bangash',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${cleanData.name},</p>
        <p>I've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
        <hr />
        <h3>Your Message:</h3>
        <p><strong>Subject:</strong> ${cleanData.subject}</p>
        <p>${cleanData.message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p>Best regards,<br />Asad Bangash</p>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(developerEmail),
      transporter.sendMail(userEmail),
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
