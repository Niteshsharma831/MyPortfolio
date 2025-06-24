// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const { adminLogin, createAdmin } = require("../controllers/adminController");
router.post("/create", createAdmin);
router.post("/login", adminLogin);

module.exports = router;
