import { Router } from "express";
import {
  createAvailability,
  getAllAvailability,
  getAvailabilityById,
  deleteAvailability,
} from "../controllers/availability.controller.js";
import roleCheck from "../middlewares/roleCheck.js";
import authMiddleware from "../middlewares/auth.js";
const router = Router();

router.post("/", authMiddleware, roleCheck("admin"), createAvailability); // Admin creates available slots
router.get("/", getAllAvailability); // Get all availability
router.get("/:id", getAvailabilityById); // Get single availability
router.delete("/:id", authMiddleware, roleCheck("admin"), deleteAvailability); // Delete availability

export default router;
