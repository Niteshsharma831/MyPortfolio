import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "https://myportfolio-zcq1.onrender.com/api/projects"
        );
        setProjects(res.data || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirm) return;

    try {
      await axios.delete(
        `https://myportfolio-zcq1.onrender.com/api/projects/${id}`
      );
      setProjects((prev) => prev.filter((p) => p._id !== id));
      alert("Project deleted successfully!"); // Added success alert
    } catch (err) {
      console.error("Error deleting project:", err);
      alert("Failed to delete the project. Try again.");
    }
  };

  return (
    // Removed mt-16 as AdminLayout already provides top padding.
    // The p-6 gives internal padding to this component.
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Manage Projects</h1>

      {loading ? (
        <p className="text-gray-500 animate-pulse">Loading projects...</p>
      ) : (
        // Added max-h-[calc(100vh-150px)] and overflow-y-auto for vertical scrolling
        // The value 150px is an estimate, you might need to adjust it based on your actual header/padding heights.
        // It accounts for the AdminLayout's main padding, this component's p-6, and the h1 height.
        <div className="overflow-x-auto overflow-y-auto bg-white rounded-lg shadow max-h-[calc(100vh-160px)] sm:max-h-[calc(100vh-180px)]">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-slate-800 text-white sticky top-0 z-10">
              {" "}
              {/* Added sticky top-0 and z-10 */}
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Description</th>
                <th className="p-4">Tech Stack</th>
                <th className="p-4">GitHub</th>
                <th className="p-4">Live</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr key={project._id} className="border-t">
                    <td className="p-4">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt="Project"
                          className="w-20 h-12 object-cover rounded"
                        />
                      ) : (
                        <span className="text-gray-400">No image</span>
                      )}
                    </td>
                    <td className="p-4 font-semibold">{project.title}</td>
                    <td className="p-4">{project.description}</td>
                    <td className="p-4">{project.techStack?.join(", ")}</td>
                    <td className="p-4">
                      {project.githubLink ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline"
                        >
                          GitHub
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="p-4">
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-green-600 underline"
                        >
                          Live
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="p-4 space-x-2">
                      <button
                        className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
                        onClick={() => alert("Edit logic coming soon")}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() => handleDelete(project._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageProjects;
