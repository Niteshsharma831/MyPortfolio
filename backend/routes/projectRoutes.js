const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProjects,
  deleteProject,
  updateProject,
  getProjectCount,
} = require("../controllers/projectController");

router.post("/create", createProject);

router.get("/", getAllProjects);

router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/count", getProjectCount);

module.exports = router;
