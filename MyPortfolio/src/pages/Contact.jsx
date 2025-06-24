import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [userOtp, setUserOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async () => {
    if (!formData.email) {
      toast.error("Please enter your email first.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/contacts/send-otp",
        {
          name: formData.name,
          email: formData.email,
        }
      );
      if (res.data.success) {
        toast.success("OTP sent to your email.");
        setOtp(res.data.otp); // for demo only
        setOtpSent(true);
      } else {
        toast.error("Failed to send OTP.");
      }
    } catch (err) {
      toast.error("Error sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpSent) {
      toast.warn("Please verify OTP first.");
      return;
    }

    if (userOtp !== otp) {
      toast.error("Invalid OTP.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "http://localhost:3000/api/contacts/contactme",
        formData
      );
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", msg: "" });
      setOtp("");
      setOtpSent(false);
      setUserOtp("");
    } catch (error) {
      toast.error("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 animate-pulse">
          Let's Connect
        </h2>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind, a freelance opportunity, or just want to say
          hello? Drop me a message and I’ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-10 text-white space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={userOtp}
              onChange={(e) => setUserOtp(e.target.value)}
              className="w-200 px-5 py-4 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={!otpSent}
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className="bg-blue-500 px-5 py-4 rounded-md text-white hover:opacity-80 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </div>

          <textarea
            name="msg"
            rows="6"
            placeholder="Your Message..."
            required
            value={formData.msg}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`flex justify-center items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-md shadow-lg transform transition duration-300 ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>🚀 Send Message</>
            )}
          </button>
        </form>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
            Find Me On
          </h3>
          <div className="flex justify-center gap-8 text-3xl">
            <a
              href="mailto:Niteshkumarsharma831@gmail.com"
              className="hover:text-pink-400 transition duration-300"
              title="Email"
            >
              📧
            </a>
            <a
              href="tel:+919572861917"
              className="hover:text-green-400 transition duration-300"
              title="Phone"
            >
              📞
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
              title="LinkedIn"
            >
              🔗
            </a>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
