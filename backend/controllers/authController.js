const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Replace with your actual validation logic
  if (email === "admin@gmail.com" && password === "admin123") {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ success: true, token });
  }

  return res
    .status(401)
    .json({ success: false, message: "Invalid credentials" });
};
// exports.verifyToken = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(403).json({ success: false, message: "No token provided" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(500).json({ success: false, message: "Failed to authenticate token" });
//     }
//     req.user = decoded;
//     next();
//   });
// };