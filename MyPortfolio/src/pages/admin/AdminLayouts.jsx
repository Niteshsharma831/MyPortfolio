import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaPlusCircle, FaFolderOpen } from "react-icons/fa";

const AdminLayout = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/admin/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/admin/add-project", label: "Add Project", icon: <FaPlusCircle /> },
    {
      to: "/admin/manageProjects",
      label: "Manage Projects",
      icon: <FaFolderOpen />,
    },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-800 text-white p-6 shadow-xl fixed top-0 left-0 h-screen z-40">
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

      {/* Main Content with left margin */}
      <main className="ml-64 w-full p-10 bg-gray-100 min-h-screen">
          
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
