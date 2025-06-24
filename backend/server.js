const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();
const port = process.env.PORT || 3000;
connectDB();

app.use(
  cors({
    origin: "*", 
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Portfolio Backend");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
