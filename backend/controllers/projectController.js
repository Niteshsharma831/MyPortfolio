const Project = require("../models/projectModels");

exports.createProject = async (req, res) => {
  try {
    const { title, description, techStack, githubLink, liveLink, image } =
      req.body;

    if (!title || !description || !techStack || !image) {
      return res
        .status(400)
        .json({ error: "Please fill all required fields." });
    }

    const newProject = new Project({
      title,
      description,
      techStack,
      githubLink,
      liveLink,
      image,
    });

    await newProject.save();

    res.status(201).json({
      message: "✅ Project created successfully!",
      project: newProject,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a project by ID
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Project not found." });
    }

    res.status(200).json({ message: "✅ Project deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a project by ID
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found." });
    }

    res.status(200).json({
      message: "✅ Project updated successfully.",
      project: updatedProject,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getProjectCount = async (req, res) => {
  try {
    const count = await Project.countDocuments();
    res.status(200).json({ total: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
