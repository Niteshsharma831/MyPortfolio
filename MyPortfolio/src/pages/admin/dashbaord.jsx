import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [messages, setMessages] = useState([]);

  // Fetch projects count
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/projects/count`
        );
        setProjectCount(res.data.total);
      } catch (err) {
        console.error("Failed to fetch project count", err);
      }
    };

    fetchCount();
  }, []);

  // Fetch all contact messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/contacts/messages"
        );
        setMessages(res.data.messages);
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    fetchMessages();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/contacts/messages/${id}`
      );
      if (res.data.success) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      } else {
        alert("Failed to delete message.");
      }
    } catch (err) {
      console.error("Failed to delete message:", err);
      alert("Error deleting message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">👨‍💻 Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Welcome back, <span className="text-pink-500">Nitesh Kumar Sharma</span>{" "}
        👋
      </h2>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div className="p-6 rounded-xl shadow-xl bg-gradient-to-br from-pink-500 to-red-500 text-white hover:scale-105 transform transition duration-300">
          <h2 className="text-lg font-medium mb-1">📂 Total Projects</h2>
          <p className="text-5xl font-bold">{projectCount}</p>
        </div>
        <div className="p-6 rounded-xl shadow-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white hover:scale-105 transform transition duration-300">
          <h2 className="text-lg font-medium mb-1">🛠️ Add New Project</h2>
          <p className="text-2xl font-semibold">Use sidebar →</p>
        </div>
        <div className="p-6 rounded-xl shadow-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white hover:scale-105 transform transition duration-300">
          <h2 className="text-lg font-medium mb-1">⚙️ Manage Projects</h2>
          <p className="text-2xl font-semibold">Edit / Delete easily</p>
        </div>
      </div>

      {/* Messages */}
      <h2 className="text-xl font-bold mb-4 text-gray-700">
        📨 Contact Messages
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 max-h-[400px] overflow-y-auto space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages found.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {msg.name}
                  </h3>
                  <p className="text-sm text-gray-500">{msg.email}</p>
                </div>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                >
                  Delete
                </button>
              </div>
              <p className="text-gray-700">{msg.msg}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
