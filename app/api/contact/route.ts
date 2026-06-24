import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  companyEmail?: string;
  companyName?: string;
  mobile?: string;
  country?: string;
  website?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function missing(value: unknown) {
  return typeof value !== "string" || value.trim().length === 0;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    if (body.website) {
      return NextResponse.json({ message: "Email sent successfully" });
    }

    const required: (keyof ContactPayload)[] = ["firstName", "lastName", "companyEmail", "companyName", "mobile", "country"];
    if (required.some((field) => missing(body[field]))) {
      return NextResponse.json({ error: "All six contact fields are required" }, { status: 400 });
    }

    if (!emailRegex.test(body.companyEmail!)) {
      return NextResponse.json({ error: "A valid company email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    const fullName = `${body.firstName!.trim()} ${body.lastName!.trim()}`;
    const text = [
      `Name: ${fullName}`,
      `Company email: ${body.companyEmail!.trim()}`,
      `Company name: ${body.companyName!.trim()}`,
      `Mobile: ${body.mobile!.trim()}`,
      `Country: ${body.country!.trim()}`,
    ].join("\n");

    await transporter.sendMail({
      from: '"Fivi Technologies" <contact@fivitechnologies.com>',
      to: "contact@fivitechnologies.com",
      subject: `New FXCRM demo request from ${body.companyName!.trim()}`,
      text,
      html: `<p><strong>Name:</strong> ${fullName}</p><p><strong>Company email:</strong> ${body.companyEmail}</p><p><strong>Company name:</strong> ${body.companyName}</p><p><strong>Mobile:</strong> ${body.mobile}</p><p><strong>Country:</strong> ${body.country}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
