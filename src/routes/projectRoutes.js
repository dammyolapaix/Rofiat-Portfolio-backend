import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { adminOnlyMiddleware } from "../middlewares/userMiddlewares.js";
import {
  createProjectHandler,
  deleteProjectByIdHandler,
  getProjectByIdHandler,
  getProjectsHandler,
  updateProjectByIdHandler,
} from "../controllers/projectControllers.js";

const router = express.Router();

adminOnlyMiddleware;

router.get("/api/projects", adminOnlyMiddleware, getProjectsHandler);

router.post("/api/projects", createProjectHandler);
// router.post("/api/projects", upload.single("image"), createProjectHandler);

router.get("/api/projects/:id", getProjectByIdHandler);

router.patch("/api/projects/:id", updateProjectByIdHandler);

router.delete("/api/projects/:id", deleteProjectByIdHandler);

// router
//   .route("/api/projects")
//   .get(getProjectsHandler)
//   .post(createProjectHandler);

// router
//   .route("/api/projects/:id")
//   .get(getProjectByIdHandler)
//   .patch(updateProjectByIdHandler)
//   .delete(deleteProjectByIdHandler);

export default router;
