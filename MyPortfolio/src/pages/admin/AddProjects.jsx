import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    github: "",
    live: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
      if (files && files[0]) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const techArray = formData.techStack
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech.length > 0);

    const dataToSend = {
      title: formData.title,
      description: formData.description,
      techStack: techArray,
      githubLink: formData.github,
      liveLink: formData.live,
      image: formData.image,
    };

    try {
      const res = await axios.post(
        "https://myportfolio-zcq1.onrender.com/api/projects/create",
        dataToSend
      );
      alert("✅ Project created successfully!");
      console.log("Response:", res.data);

      // Reset the form
      setFormData({
        title: "",
        description: "",
        techStack: "",
        github: "",
        live: "",
        image: "",
      });
    } catch (error) {
      console.error("❌ Error creating project:", error.response || error);
      alert("❌ Failed to create project. Check console for details.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-10 px-6 mt-10 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-pink-500">
          Add New Project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <input
              type="text"
              name="title"
              placeholder="Project Title *"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none"
            />
          </div>

          <div>
            <textarea
              name="description"
              rows="4"
              placeholder="Short Description *"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none"
            ></textarea>
          </div>

          <div>
            <input
              type="text"
              name="techStack"
              placeholder="Tech Stack (comma separated) *"
              value={formData.techStack}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              name="github"
              placeholder="GitHub Link"
              value={formData.github}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none"
            />
            <input
              type="url"
              name="live"
              placeholder="Live Site Link"
              value={formData.live}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300" htmlFor="image">
              Project Image (optional)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full bg-white/10 text-sm text-gray-300"
            />
          </div>

          {formData.image && (
            <div className="mt-4">
              <img
                src={formData.image}
                alt="Preview"
                className="w-64 h-40 object-cover rounded-md shadow"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition duration-300"
          >
            📤 Post Project
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
