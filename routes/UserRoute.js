import express from "express";
import {
  createUser,
  deletedUser,
  getUserById,
  getUsers,
  updatedUser,
} from "../controllers/UserController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", verifyToken, updatedUser);
router.delete("/users/:id", deletedUser);

export default router;
