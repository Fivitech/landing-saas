import { contactDetails } from "@/data/site";

// Brand tokens (inline-styled so they survive email clients).
const GREEN = "#00E676";
const DARK = "#0B1220";
const INK = "#1f2937";
const MUTED = "#6b7280";

// WhatsApp click-to-chat number (digits only). Override with CONTACT_WHATSAPP.
const WHATSAPP = (process.env.CONTACT_WHATSAPP ?? contactDetails.tel).replace(/[^0-9]/g, "");

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fivitechnologies/" },
  { label: "Facebook", href: "https://www.facebook.com/FiviTechnologies/" },
  { label: "Instagram", href: "https://www.instagram.com/fivitechnologies/" },
  { label: "X", href: "https://twitter.com/fivitechnologies" },
];

/** Branded welcome / auto-reply sent to whoever submits the contact form. */
export function welcomeEmail({ firstName }: { firstName?: string }) {
  const name = firstName && firstName.trim() ? firstName.trim() : "there";
  const waText = encodeURIComponent(
    "Hi Fivitech, I just requested a demo of FXCRM on your website.",
  );
  const waLink = `https://wa.me/${WHATSAPP}?text=${waText}`;
  const subject = "Thanks for your interest in Fivitech FXCRM";

  const text = [
    `Hi ${name},`,
    "",
    "Thanks for reaching out to Fivitech! We've received your request and a member of our team will be in touch with you as soon as possible.",
    "",
    "For the fastest response, message us on WhatsApp:",
    waLink,
    "",
    "You can also simply reply to this email with your WhatsApp number and we'll reach out there.",
    "",
    "Talk soon,",
    "The Fivitech Team",
    "",
    contactDetails.address,
  ].join("\n");

  const socialRow = SOCIALS.map(
    (s) =>
      `<a href="${s.href}" style="color:${MUTED};text-decoration:none;font-size:12px;font-weight:600;margin:0 8px;">${s.label}</a>`,
  ).join("<span style=\"color:#d1d5db\">·</span>");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(11,18,32,0.08);">
            <!-- Header -->
            <tr>
              <td style="background:${DARK};padding:28px 32px;text-align:center;">
                <div style="font-size:24px;font-weight:800;letter-spacing:1px;color:#ffffff;">FIVI<span style="color:${GREEN};">TECH</span></div>
                <div style="margin-top:4px;font-size:11px;font-weight:700;letter-spacing:3px;color:${GREEN};text-transform:uppercase;">FXCRM</div>
              </td>
            </tr>
            <!-- Accent bar -->
            <tr><td style="height:4px;background:${GREEN};line-height:4px;font-size:0;">&nbsp;</td></tr>
            <!-- Body -->
            <tr>
              <td style="padding:36px 32px 8px 32px;">
                <h1 style="margin:0 0 16px 0;font-size:22px;line-height:1.3;color:${INK};">Thanks for reaching out, ${name}! 👋</h1>
                <p style="margin:0 0 16px 0;font-size:15px;line-height:1.65;color:${INK};">
                  We've received your request and we're glad you're interested in <strong>Fivitech FXCRM</strong>. A member of our team will be in touch with you <strong>as soon as possible</strong> to walk you through the platform.
                </p>
                <p style="margin:0 0 24px 0;font-size:15px;line-height:1.65;color:${INK};">
                  Want a faster reply? Message us on WhatsApp — or just send us your WhatsApp number and we'll reach out there.
                </p>
                <!-- WhatsApp CTA -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px 0;">
                  <tr>
                    <td style="border-radius:999px;background:${GREEN};">
                      <a href="${waLink}" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:700;color:${DARK};text-decoration:none;border-radius:999px;">Message us on WhatsApp →</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 8px 0;font-size:14px;line-height:1.6;color:${MUTED};">
                  You can also reply directly to this email with your WhatsApp number and a member of our team will contact you shortly.
                </p>
              </td>
            </tr>
            <!-- Sign off -->
            <tr>
              <td style="padding:8px 32px 32px 32px;">
                <p style="margin:0;font-size:15px;line-height:1.6;color:${INK};">Talk soon,<br/><strong>The Fivitech Team</strong></p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:24px 32px;background:#f9fafb;border-top:1px solid #eef0f3;text-align:center;">
                <div style="margin-bottom:12px;">${socialRow}</div>
                <p style="margin:0 0 6px 0;font-size:12px;line-height:1.5;color:${MUTED};">${contactDetails.address}</p>
                <p style="margin:0;font-size:11px;color:#9ca3af;">© ${"" + new Date().getFullYear()} Fivi Technologies. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}
