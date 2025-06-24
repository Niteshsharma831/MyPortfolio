
# 🚀 Nitesh Kumar Sharma – Full Stack Developer Portfolio

A professional full-stack portfolio website with an admin dashboard built using the **MERN Stack**. It features project management, contact message handling, secure admin authentication, and email OTP verification.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Features
- Admin login with JWT
- Add, edit, delete projects
- Contact form with OTP verification via email
- Fetch and delete contact messages
- Responsive modern UI with animations

---

## 📁 Folder Structure

```
MyPortfolio/
├── client/            # React frontend
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── backend/           # Node/Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .env
└── README.md
```

---

## 🔐 Admin Credentials

Create default admin:

```js
const bcrypt = require("bcrypt");
const Admin = require("./models/Admin");

const createAdmin = async () => {
  const hashedPass = await bcrypt.hash("admin123", 10);
  await Admin.create({ username: "admin", password: hashedPass });
};

createAdmin();
```

---

## 🔧 Setup Instructions

### 1. Clone Repo

```bash
git clone https://github.com/yourusername/portfolio.git
cd MyPortfolio
```

### 2. Install Dependencies

```bash
cd client
npm install
cd ../backend
npm install
```

### 3. Create .env in backend

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_secret
MAIL_USER=youremail@gmail.com
MAIL_PASS=your_app_password
```

### 4. Run Servers

```bash
# Client
npm run dev

# Backend
node server.js
```

---

## 📬 Contact Flow

- User submits name, email, message
- OTP sent to email (via Nodemailer)
- OTP must be entered for successful submission
- Admin can view/delete messages

---

## 🖼 Screenshots

*(Include images here)*

---

## 📄 License

Licensed under the MIT License.
