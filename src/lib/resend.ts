import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export type ContactFormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
};

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: ContactFormData) => data)
  .handler(async ({ data }: { data: ContactFormData }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      return {
        success: false,
        error: "RESEND_API_KEY is not configured in environment variables. Please add RESEND_API_KEY to your .env file.",
      };
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env["CONTACT_TO_EMAIL"] || "ig@aevivekk.in" || "vj36313@gmail.com";
    const fromEmail = process.env["RESEND_FROM_EMAIL"] || "AE.VIVEK <contact@aevivekk.in>";

    try {
      // 1. Send detailed inquiry notification to owner (ig@aevivekk.in)
      const ownerRes = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: data.email,
        subject: `New Inquiry: ${data.projectType} from ${data.name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff;">
            <h2 style="font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #111; padding-bottom: 12px;">New Project Inquiry — AE.VIVEK</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">${escapeHtml(data.name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb;">${escapeHtml(data.email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Project Type:</td>
                <td style="padding: 8px 0;">${escapeHtml(data.projectType)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Budget:</td>
                <td style="padding: 8px 0;">${escapeHtml(data.budget)}</td>
              </tr>
            </table>
            <div style="margin-top: 16px;">
              <p style="font-weight: 600; margin-bottom: 8px;">Project Details:</p>
              <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(data.details)}</div>
            </div>
          </div>
        `,
      });

      if (ownerRes.error) {
        console.error("Resend owner notification error:", ownerRes.error.message);
        return { success: false, error: ownerRes.error.message };
      }

      // 2. Attempt Thank You email to sender (data.email)
      // Note: Resend requires a verified domain to send emails to external recipients.
      try {
        const senderRes = await resend.emails.send({
          from: fromEmail,
          to: [data.email],
          subject: `Thank you for contacting AE.VIVEK`,
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff;">
              <h2 style="font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px; color: #111;">Thank You for Reaching Out, ${escapeHtml(data.name)}!</h2>
              <p style="font-size: 15px; line-height: 1.6; color: #374151;">
                Thank you for contacting <strong>AE.VIVEK</strong>. Your inquiry has been received! I'm excited to review your footage and project details.
              </p>
              <p style="font-size: 15px; line-height: 1.6; color: #374151;">
                Here is a copy of your submitted project inquiry:
              </p>
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #f3f4f6; margin: 16px 0; font-size: 14px;">
                <p style="margin: 4px 0;"><strong>Project Type:</strong> ${escapeHtml(data.projectType)}</p>
                <p style="margin: 4px 0;"><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>
                <p style="margin: 4px 0;"><strong>Details:</strong> ${escapeHtml(data.details)}</p>
              </div>
              <p style="font-size: 15px; line-height: 1.6; color: #374151;">
                I will review your message and reply as soon as possible.
              </p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
              <p style="font-size: 13px; color: #6b7280; margin: 0;">AE.VIVEK — Nature Videographer & Video Editor</p>
            </div>
          `,
        });

        if (senderRes.error) {
          console.warn("Resend thank-you copy note:", senderRes.error.message);
        }
      } catch (senderErr) {
        console.warn("Could not send thank-you copy to sender:", senderErr);
      }

      return { success: true };
    } catch (err) {
      console.error("Failed to send email via Resend:", err);
      return {
        success: false,
        error: err instanceof Error ? err.message : "An unexpected error occurred while sending email.",
      };
    }
  });

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
