import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// Send Email to SoftNova Admin
export const sendAdminEmail = async ({ name, email, message }) => {

  await transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: process.env.EMAIL_USER,

    subject: "📩 New Contact Form Submission - SoftNova Academy",

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">

        <h2 style="color:#dc2626;">
          New Contact Form Submission
        </h2>

        <hr/>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message}
        </p>

        <hr/>

        <p>
          This message was submitted through SoftNova Academy website contact form.
        </p>

      </div>
    `,

  });

};



// Auto Reply to Student
export const sendAutoReply = async ({ name, email }) => {

  await transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: email,

    subject: "Thank You for Contacting SoftNova Academy",

    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">

        <h2 style="color:#dc2626;">
          Hello ${name},
        </h2>


        <p>
          Thank you for contacting 
          <strong>SoftNova Academy</strong>.
        </p>


        <p>
          We have successfully received your message through our website contact form.
        </p>


        <p>
          Our team has been notified and will review your inquiry carefully.
          We will contact you soon with the required information and guidance.
        </p>


        <p>
          If your query is related to courses, internships, admissions,
          or any of our programs, our team will assist you.
        </p>


        <br/>


        <p>
          We appreciate your interest in SoftNova Academy.
        </p>


        <br/>


        <p>
          Regards,
        </p>


        <h3 style="color:#dc2626;">
          SoftNova Academy Team
        </h3>


      </div>
    `,

  });

};