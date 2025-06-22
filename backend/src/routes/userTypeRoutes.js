import express from "express";
import {
  getUsrTypes,
  getUsrType,
  createUsrType,
  deleteUsrType,
  updateUsrType,
} from "../controllers/userTypeController.js";

const router = express.Router();

router.get("/UsrTypes", getUsrTypes);
router.get("/UsrType/:id", getUsrType);
router.post("/NewUsrType", createUsrType);
router.delete("/DeleteUsrType/:id", deleteUsrType);
router.put("/UpdateUsrType/:id", updateUsrType);

export default router;
