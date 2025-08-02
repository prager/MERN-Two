import express from "express";
import { createTeam, getAllTeams } from "../controllers/teamController.js";

const router = express.Router();

router.post("/newteam", createTeam);
router.get("/getallteams", getAllTeams);

export default router;
