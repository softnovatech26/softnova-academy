import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Send email to SoftNova Admin
export const sendAdminEmail = async ({ name, email, message }) => {
  try {
    const data = await resend.emails.send({
      from: `SoftNova Website <${process.env.EMAIL_FROM}>`,
      to: ["softnovatech.pk@gmail.com"],
      subject: `New Contact Form: ${name}`,
      html: `
        <h2>New Message Received</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    console.log("✅ Admin email sent:", data.data?.id);

    return data.data;
  } catch (error) {
    console.error("❌ Admin Email Error:", error);
    throw error;
  }
};

// Send automatic reply to student
export const sendAutoReply = async (to, name) => {
  try {
    const data = await resend.emails.send({
      from: `SoftNova Academy <${process.env.EMAIL_FROM}>`,
      to: [to],
      subject: "Thanks for contacting SoftNova Academy!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Hi ${name},</h2>

          <p>
            Thank you for reaching out to SoftNova Academy! 💙
          </p>

          <p>
            We have received your message and our team will get back
            to you within 24 hours.
          </p>

          <br />

          <p>Regards,</p>

          <p>
            <b>Team SoftNova Academy</b>
          </p>

          <p>softnovatech.pk</p>
        </div>
      `,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    console.log("✅ Auto-reply sent:", data.data?.id);

    return data.data;
  } catch (error) {
    console.error("❌ Auto-reply Error:", error);
    throw error;
  }
};