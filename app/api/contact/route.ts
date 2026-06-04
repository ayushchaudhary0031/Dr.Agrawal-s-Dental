import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const treatment = formData.get('treatment');
    const date = formData.get('date');
    const time = formData.get('time');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Dr.Agrawal's Dental" <${process.env.SMTP_USER}>`,
      to: 'ayushchaudjary2001@gmail.com',
      subject: `New Appointment Request from ${name}`,
      text: `
        New Appointment Request

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Treatment: ${treatment}
        Date: ${date}
        Time: ${time}
      `,
      html: `
        <h3>New Appointment Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Treatment:</strong> ${treatment}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    };

    const clientMailOptions = {
      from: `"Dr.Agrawal's Dental" <${process.env.SMTP_USER}>`,
      to: email as string,
      subject: `Appointment Request Confirmation - Dr. Agrawal Dental`,
      text: `
        Dear ${name},
        
        Thank you for requesting an appointment with Dr. Agrawal Dental. 
        We have received your request for ${treatment} on ${date} at ${time}.
        
        Our team will contact you shortly at ${phone} to confirm your appointment.
        
        Best regards,
        Dr. Agrawal Dental Clinic
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #005b82;">Appointment Request Received</h2>
          <p>Dear ${name},</p>
          <p>Thank you for requesting an appointment with Dr. Agrawal Dental.</p>
          <p>We have received your request with the following details:</p>
          <ul>
            <li><strong>Treatment:</strong> ${treatment}</li>
            <li><strong>Preferred Date:</strong> ${date}</li>
            <li><strong>Preferred Time:</strong> ${time}</li>
            <li><strong>Phone Number:</strong> ${phone}</li>
          </ul>
          <p>Our team will contact you shortly to confirm your appointment.</p>
          <br/>
          <p>Best regards,<br/><strong>Dr. Agrawal Dental Clinic</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    if (email) {
      await transporter.sendMail(clientMailOptions);
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
