import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/user/:id", getUser);
router.post("/NewUser", createUser);
router.delete("/DeleteUser/:id", deleteUser);
router.put("/UpdateUser/:id", updateUser);

export default router;
