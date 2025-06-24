const express = require("express");
const router = express.Router();
const {
  sendMsg,
  sendOtp,
  getAllMessages,
  deleteMessage,
} = require("../controllers/contactController");

router.post("/contactme", sendMsg);
router.post("/send-otp", sendOtp);
router.get("/messages", getAllMessages);
router.delete("/messages/:id", deleteMessage);
module.exports = router;
