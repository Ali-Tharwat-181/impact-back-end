import { Router } from "express";
import {
  bookSession,
  getAllBookings,
  getBookingById,
  deleteBooking,
} from "../controllers/freeSession.controller.js";
import roleCheck from "../middlewares/roleCheck.js";

const router = Router();

router.post("/book", bookSession); // User books a session
router.get("/", roleCheck("admin"), getAllBookings); // Admin gets all bookings
router.get("/:id", roleCheck("admin"), getBookingById); // Get one booking
router.delete("/:id", roleCheck("admin"), deleteBooking); // Cancel booking

export default router;
