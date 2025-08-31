import { Router } from "express";
import {
  bookSession,
  getAllBookings,
  getBookingById,
  deleteBooking,
} from "../controllers/freeSession.controller.js";
import roleCheck from "../middlewares/roleCheck.js";
import authMiddleware from "../middlewares/auth.js";

const router = Router();

router.post("/book", bookSession); // User books a session
router.get("/", authMiddleware, roleCheck("admin"), getAllBookings); // Admin gets all bookings
router.get("/:id", authMiddleware, roleCheck("admin"), getBookingById); // Get one booking
router.delete("/:id", authMiddleware, roleCheck("admin"), deleteBooking); // Cancel booking

export default router;
