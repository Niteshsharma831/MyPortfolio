import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaFolderOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const AdminLayout = () => {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { to: "/admin/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/admin/add-project", label: "Add Project", icon: <FaPlusCircle /> },
    {
      to: "/admin/manageProjects",
      label: "Manage Projects",
      icon: <FaFolderOpen />,
    },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen relative">
      {/* 🔘 Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-4 left-4 z-50 bg-red-500 text-white p-2 rounded-md shadow-md"
      >
        {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* 📦 Sidebar */}
      <aside
        className={`bg-slate-800 text-white p-6 shadow-xl z-40 fixed top-0 left-0 h-screen w-64 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:static sm:block`}
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-red-400 tracking-wide">
            Nitesh Kumar Sharma
          </h2>
        </div>

        <nav className="space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeSidebar} // auto-close sidebar on mobile
              className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all ${
                pathname === link.to
                  ? "bg-red-500 text-white"
                  : "text-gray-300 hover:bg-red-500 hover:text-white"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* 🧱 Main Content */}
      <main className="flex-1 sm:ml-64 w-full p-6 sm:p-10 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
