import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { welcomeEmail } from "@/lib/emails";

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

    // Zoho Mail SMTP. Host defaults to the global data center; override
    // SMTP_HOST per Zoho region if the mailbox lives elsewhere (see notes):
    //   .com -> smtp.zoho.com | EU -> smtp.zoho.eu | India -> smtp.zoho.in
    //   Saudi -> smtp.zoho.sa | Australia -> smtp.zoho.com.au
    // Port 465 = SSL (secure), 587 = STARTTLS.
    const smtpPort = Number(process.env.SMTP_PORT ?? 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.zoho.com",
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // The authenticated Zoho mailbox sending the notification, and where
    // leads are delivered. Both default to contact@fivitech.com.
    const fromAddress = process.env.EMAIL_USER ?? "contact@fivitech.com";
    const toAddress = process.env.CONTACT_TO ?? "contact@fivitech.com";

    const fullName = `${body.firstName!.trim()} ${body.lastName!.trim()}`;
    const text = [
      `Name: ${fullName}`,
      `Company email: ${body.companyEmail!.trim()}`,
      `Company name: ${body.companyName!.trim()}`,
      `Mobile: ${body.mobile!.trim()}`,
      `Country: ${body.country!.trim()}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"Fivi Technologies" <${fromAddress}>`,
      to: toAddress,
      replyTo: body.companyEmail!.trim(),
      subject: `New FXCRM demo request from ${body.companyName!.trim()}`,
      text,
      html: `<p><strong>Name:</strong> ${fullName}</p><p><strong>Company email:</strong> ${body.companyEmail}</p><p><strong>Company name:</strong> ${body.companyName}</p><p><strong>Mobile:</strong> ${body.mobile}</p><p><strong>Country:</strong> ${body.country}</p>`,
    });

    // Branded welcome / auto-reply to the prospect. Non-blocking: a failure here
    // must not drop the lead (the internal notification above already succeeded).
    try {
      const welcome = welcomeEmail({ firstName: body.firstName });
      await transporter.sendMail({
        from: `"Fivitech FXCRM" <${fromAddress}>`,
        to: body.companyEmail!.trim(),
        subject: welcome.subject,
        text: welcome.text,
        html: welcome.html,
      });
    } catch (autoReplyError) {
      console.error("Welcome auto-reply failed (non-blocking):", autoReplyError);
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
