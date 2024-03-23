import Project from "../models/Project.js";

export const getProjectsHandler = async (req, res) => {
  const projects = await Project.find();
  res.json({ msg: "This is the projects routes", projects: projects });
};

export const createProjectHandler = async (req, res) => {
  console.log(req.body);
  // req.body.images = [req.body.image];
  const project = await Project.create(req.body);
  res.status(201).json({ project: project });
};

export const getProjectByIdHandler = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.status(200).json({
    msg: `This is the single project with the id of ${req.params.id}`,
    project: project,
  });
};

export const updateProjectByIdHandler = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  console.log(req.params);
  res.status(200).json({
    msg: `Update project with the id of ${req.params.id}`,
    project: project,
  });
};

export const deleteProjectByIdHandler = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  console.log(req.params);
  res.status(200).json({
    msg: `Delete project with the id of ${req.params.id}`,
    project: project,
  });
};
