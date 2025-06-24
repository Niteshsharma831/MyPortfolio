import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/login`,
        {
          username: formData.username,
          password: formData.password,
        }
      );
      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-slate-900 via-gray-900 to-black px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 text-white p-8 rounded-xl border border-white/20 backdrop-blur-lg w-full max-w-md shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-4">{error}</p>
        )}

        <div className="mb-4">
          <label className="block mb-1 text-sm">Username</label>
          <input
            type="text"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
            placeholder="admin"
            className="w-full px-4 py-2 bg-white/20 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2 bg-white/20 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md font-semibold bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-transform duration-300 cursor-pointer text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🔐 Login
        </button>
      </form>
    </div>
  );
};

export default Login;
