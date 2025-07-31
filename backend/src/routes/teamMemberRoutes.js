import express from "express";
import { createTeamMember } from "../controllers/teamMemberController.js";

const router = express.Router();

router.post("/NewTeamMember", createTeamMember);

export default router;
