import express from "express";
import {
  getAllStudentsController,
  getStudentByIdController,
  createNewUserController,
  updateUserController,
  deleteUserController,
  getAllNonStudentsController,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.js";
import roleCheck from "../middlewares/roleCheck.js";

const router = express.Router();

router.get(
  "/students",
  authMiddleware,
  roleCheck("admin"),
  getAllStudentsController
);
router.get(
  "/students/:id",
  authMiddleware,
  roleCheck("admin"),
  getStudentByIdController
);
router.post("/", authMiddleware, roleCheck("admin"), createNewUserController); // Admin can create user with any role
router.put("/:id", authMiddleware, roleCheck("admin"), updateUserController);
router.delete("/:id", authMiddleware, roleCheck("admin"), deleteUserController);
router.get(
  "/employees",
  authMiddleware,
  roleCheck("admin"),
  getAllNonStudentsController
);

export default router;
