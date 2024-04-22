const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, html, attachments }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const emailInfo = await transporter.sendMail({
    from: `Nafsi mental health <${process.env.EMAIL}>`,
    to,
    subject,
    html,
    attachments,
  });

  return emailInfo.accepted.length > 0;
};

module.exports = { sendEmail };
