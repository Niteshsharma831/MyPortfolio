const sendMSG = require("../models/contactModel");
const sendMail = require("../utils/sendMail");
const generateWelcomeEmail = require("../utils/templates/welcomeTemplate");
const nodemailer = require("nodemailer");

exports.sendMsg = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res
        .status(400)
        .json({ error: "Please fill all required fields." });
    }

    const msgSuccess = new sendMSG({ name, email, msg });
    await msgSuccess.save();

    // Send welcome email to user
    await sendMail({
      to: email,
      subject: `Welcome, ${name}!`,
      text: `Hi ${name},\n\nThank you for contacting me. I'll get back to you soon.`,
      html: generateWelcomeEmail(name),
    });

    res.status(201).json({
      message: "✅ Message sent successfully!",
      project: msgSuccess,
    });
  } catch (err) {
    console.error("Mail or Save Error:", err);
    res.status(500).json({ error: err.message });
  }
};

// send OTP functionality is not implemented in this controller.

const otpStore = {};

exports.sendOtp = async (req, res) => {
  const { name, email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[email] = otp;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Nitesh Kumar Sharma" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP for Verification",
    html: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="padding: 30px;">
        <h2 style="color: #e11d48; text-align: center;">🔐 Email Verification</h2>
        <p style="font-size: 16px; color: #333;">Hi ${name},</p>
        <p style="font-size: 16px; color: #333;">
          Please use the OTP below to verify your email address:
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; font-size: 28px; font-weight: bold; letter-spacing: 4px; background: #fef2f2; color: #dc2626; padding: 14px 24px; border-radius: 10px;">
            ${otp}
          </span>
        </div>

        <p style="font-size: 14px; color: #666;">
          This OTP is valid for 10 minutes. Do not share it with anyone.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 14px; text-align: center; color: #888;">
          Need help? Contact us at 
          <a href="mailto:Niteshkumarsharma831@gmail.com" style="color: #3b82f6;">Niteshkumarsharma831@gmail.com</a><br/>
          or call <a href="tel:+919572861917" style="color: #3b82f6;">+91 95728 61917</a>
        </p>

        <p style="font-size: 12px; text-align: center; color: #aaa;">
          &copy; ${new Date().getFullYear()} Nitesh Kumar Sharma. All rights reserved.
        </p>
      </div>
    </div>
  </div>
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, otp });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

exports.contactMe = async (req, res) => {
  const { name, email, msg } = req.body;
  console.log("Contact Message:", { name, email, msg });

  res.json({ success: true });
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await sendMSG.find().sort({ createdAt: -1 });
    res.status(200).json({ messages });
  } catch (err) {
    console.error("Failed to fetch messages:", err);
    res.status(500).json({ message: "Server error while fetching messages." });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const deleted = await sendMSG.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Message not found" });
    res.json({ success: true, message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting message" });
  }
};
