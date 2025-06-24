const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existing = await Admin.findOne({ username });
    if (existing)
      return res.status(400).json({ message: "Admin already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    res
      .status(201)
      .json({ success: true, message: "Admin created successfully" });
  } catch (err) {
    console.error("Admin creation error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: "Invalid username" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ success: true, token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
