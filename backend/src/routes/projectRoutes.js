import express from "express";
import { createProject } from "../controllers/projectController.js";

const router = express.Router();

router.post("/newproject", createProject);

export default router;
