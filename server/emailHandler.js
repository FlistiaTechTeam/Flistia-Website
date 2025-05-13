// filepath: server/emailHandler.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // start encrypted
  auth: {
    user: "info@flistia.com",
    pass: "}!QK1ijkRMdZx.oa_@A?",
  },
});

const sendEmail = async (req, res) => {
  const { name, email, phone, service } = req.body;

  try {
    const mailOptions = {
      from: '"Flistia Contact Form" <info@flistia.com>',
      to: "info@flistia.com",
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};

transporter.verify((err) => {
  if (err) {
    console.error("✉️  SMTP connection failed:", err);
  } else {
    console.log("✅ SMTP server is ready to take our messages");
  }
});

export default sendEmail;
