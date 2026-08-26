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
    const toEmail = process.env["CONTACT_TO_EMAIL"] || "ig@aevivekk.in";
    const fromEmail = process.env["RESEND_FROM_EMAIL"] || "onboarding@resend.dev";

    try {
      const response = await resend.emails.send({
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

      if (response.error) {
        console.error("Resend API error:", response.error);
        return { success: false, error: response.error.message };
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
