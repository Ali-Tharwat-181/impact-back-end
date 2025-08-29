import {
  register,
  login,
  getMe,
  logout,
  forgotPassword,
  resetPassword,
  updatePassword,
} from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.js";

import { Router } from "express";
const router = Router();

// Register
router.post("/register", register);
// Login
router.post("/login", login);
// Get current user (protected)
router.get("/me", authMiddleware, getMe);
// Logout
router.post("/logout", logout);

// Forgot Password
router.post("/forgot-password", forgotPassword);

// Reset Password
router.post("/reset-password", resetPassword);

// Update Password (protected)
router.post("/update-password", authMiddleware, updatePassword);

export default router;
