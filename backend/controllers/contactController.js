import {
  sendAdminEmail,
  sendAutoReply,
} from "../services/emailService.js";

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

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
    console.log("DEBUG ENV : ", process.env.EMAIL_USER, process.env.EMAIL_PASS ? "PASS SET : PASS NOT SET");
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await sendAdminEmail({ name, email, message });
      await sendAutoReply(email, name);
      console.log("✅ Email sent successfully");
    } else {
      console.log("❌ EMAIL_USER or EMAIL_PASS missing in Railway");
    }
  } catch (error) {
    console.error("EMAIL ERROR:", error);
  }

  res.status(200).json({
    success: true,
    message: "Message received successfully",
  });


if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("EMAIL_USER or EMAIL_PASS is missing.");
  return res.status(500).json({
    success: false,
    message: "Email service is not configured.",
  });
}

await sendAdminEmail({
  name,
  email,
  message,
});

await sendAutoReply({
  name,
  email,
});

return res.status(200).json({
  success: true,
  message: "Your message and emails were sent successfully.",
});
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