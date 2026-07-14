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
    


    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {

  // Email to SoftNova
  await sendAdminEmail({
    name,
    email,
    message,
  });

  // Auto Reply to Student
  await sendAutoReply({
    name,
    email,
  });

} else {

  console.log("Email credentials not configured. Skipping email sending.");

}

    return res.status(200).json({
      success: true,
      message: "Your message has been received successfully.",
    });

  } catch (error) {
    console.error("Email Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};