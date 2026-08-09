import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendAdminEmail = async ({ name, email, message }) => {
  try {
    const data = await resend.emails.send({
      from: `SoftNova Website <${process.env.EMAIL_FROM}>`,
      to: ['softnovatech.pk@gmail.com'], // yahan apna admin email daalo
      subject: `New Contact Form: ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });
    console.log("✅ Admin email sent:", data.id);
    return data;
  } catch (error) {
    console.error("❌ Admin Email Error:", error);
    throw error;
  }
};

export const sendAutoReply = async (to, name) => {
  try {
    const data = await resend.emails.send({
      from: `SoftNovaTech <${process.env.EMAIL_FROM}>`,
      to: [to], // user ka email
      subject: "Thanks for contacting SoftNovaTech!",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for reaching out to us!</p>
        <p>We have received your message and our team will get back to you within 24 hours.</p>
        <br/>
        <p>Regards,<br/>Team SoftNovaTech</p>
      `,
    });
    console.log("✅ Auto-reply sent:", data.id);
    return data;
  } catch (error) {
    console.error("❌ Auto-reply Error:", error);
    throw error;
  }
};