
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      mobile,
      course,
      mode,
      message,
    } = body;

    if (!fullName || !email || !mobile || !course || !mode || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!/^[0-9+\-\s()]{7,20}$/.test(mobile)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid mobile number." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      throw new Error("Gmail credentials are not configured.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"GRR Careers Website" <${gmailUser}>`,
      to: "grrcareersvlsi@gmail.com",
      replyTo: email,
      subject: `New Course Enquiry - ${course}`,
      text: `
New Course Enquiry

Full Name: ${fullName}
Email: ${email}
Mobile Number: ${mobile}
Course: ${course}
Course Mode: ${mode}

Enquiry Message:
${message}
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully!",
    });
  } catch (error) {
    console.error("Enquiry email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
