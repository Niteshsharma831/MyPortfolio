import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/projects`
        );
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-gradient-to-r from-slate-900 via-gray-900 to-black py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Featured Projects
        </h2>

        {loading ? (
          <div className="text-center text-white text-lg mt-12 animate-pulse">
            🔄 Loading Projects...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 min-h-[500px] flex flex-col"
              >
                <div className="p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>

                <div className="px-6 pb-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                      {project.description}
                    </p>

                    <p className="text-sm text-emerald-300 font-semibold mb-2">
                      Tech Stack:
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs">
                      {project.techStack.map((tech, i) => (
                        <li
                          key={i}
                          className="bg-emerald-600/30 px-3 py-1 rounded-full text-white"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 mt-6">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-200 font-medium"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-200 font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
