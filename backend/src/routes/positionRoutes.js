import express from "express";
import { createPosition } from "../controllers/positionController.js";

const router = express.Router();

router.post("/newposition", createPosition);

export default router;
