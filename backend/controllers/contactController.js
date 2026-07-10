export const sendContactMessage = (req, res) => {

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


  return res.status(200).json({
    success: true,
    message: "Your message has been received successfully.",
  });

};