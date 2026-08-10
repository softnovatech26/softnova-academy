import {
  sendAdminEmail,
  sendAutoReply,
} from "../services/emailService.js";

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    console.log("📩 New Contact Message");
    console.log("----------------------------");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("----------------------------");

    // 1. Admin ko email bhejo
    await sendAdminEmail({
      name,
      email,
      message,
    });

    // 2. Student ko automatic reply bhejo
    await sendAutoReply(email, name);

    console.log("✅ Admin email and auto-reply completed");

    return res.status(200).json({
      success: true,
      message: "Your message has been received successfully.",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Email could not be sent.",
    });
  }
};