import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, position, experience, message, to, subject } = body;

    // Create email content
    const emailContent = `
      New Job Application Received
      
      Position: ${position}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      
      Previous Experience:
      ${experience || 'No experience provided'}
      
      Why they want to join BUNZ:
      ${message}
    `;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
} 