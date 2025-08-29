import { Router } from "express";
import {
  createAvailability,
  getAllAvailability,
  getAvailabilityById,
  deleteAvailability,
} from "../controllers/availability.controller.js";
import roleCheck from "../middlewares/roleCheck.js";
const router = Router();

router.post("/", roleCheck("admin"), createAvailability); // Admin creates available slots
router.get("/", getAllAvailability); // Get all availability
router.get("/:id", getAvailabilityById); // Get single availability
router.delete("/:id", roleCheck("admin"), deleteAvailability); // Delete availability

export default router;
