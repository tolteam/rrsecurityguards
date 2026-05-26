import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, details } = body;

    // Basic validation
    if (!email || !phone) {
      return NextResponse.json(
        { error: "Email and phone are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Rapid Response Security Guards <noreply@rrsecurityguards.com>",
      to: "nakibw@gmail.com",
      replyTo: email,
      subject: `New Quote Request — ${service || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a2e; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #DA5A31; margin: 0; font-size: 20px;">
              New Security Quote Request
            </h1>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 140px; color: #333;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555;">${name || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555;">
                  <a href="mailto:${email}" style="color: #DA5A31;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555;">
                  <a href="tel:${phone}" style="color: #DA5A31;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555;">${service || "Not specified"}</td>
              </tr>
              ${
                details
                  ? `<tr>
                <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Details</td>
                <td style="padding: 10px 0; color: #555; white-space: pre-wrap;">${details}</td>
              </tr>`
                  : ""
              }
            </table>
          </div>
          <div style="background: #1a1a2e; padding: 16px 24px; border-radius: 0 0 8px 8px;">
            <p style="color: #888; font-size: 12px; margin: 0;">
              Sent from rrsecurityguards.com contact form
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
