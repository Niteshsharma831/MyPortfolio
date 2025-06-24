import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(true);

  // Fetch project count
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get(
          "https://myportfolio-zcq1.onrender.com/api/projects/count"
        );
        setProjectCount(res.data.total || 0);
      } catch (err) {
        console.error("Failed to fetch project count:", err);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchCount();
  }, []);

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          "https://myportfolio-zcq1.onrender.com/api/contacts/messages"
        );
        setMessages(res.data.messages || []);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      } finally {
        setLoadingMessages(false);
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
        `https://myportfolio-zcq1.onrender.com/api/contacts/messages/${id}`
      );
      if (res.data.success) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      } else {
        alert("Failed to delete the message.");
      }
    } catch (err) {
      console.error("Error deleting message:", err);
      alert("Something went wrong while deleting.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-10">
      {/* Header */}
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
          <p className="text-5xl font-bold">
            {loadingProjects ? "..." : projectCount}
          </p>
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

      {/* Contact Messages */}
      <h2 className="text-xl font-bold mb-4 text-gray-700">
        📨 Contact Messages
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 max-h-[400px] overflow-y-auto space-y-4">
        {loadingMessages ? (
          <p className="text-gray-500">Loading messages...</p>
        ) : messages.length === 0 ? (
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
