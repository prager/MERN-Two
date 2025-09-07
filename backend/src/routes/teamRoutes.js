import express from "express";
import {
  createTeam,
  getAllTeams,
  getTeam,
  deleteTeam,
} from "../controllers/teamController.js";

const router = express.Router();

router.post("/newteam", createTeam);
router.get("/getallteams", getAllTeams);
router.get("/team/:id", getTeam);
router.delete("/deleteteam/:id", deleteTeam);

export default router;
