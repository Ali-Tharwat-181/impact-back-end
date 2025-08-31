// routes/booking.routes.js
import express from "express";
import {
  createBookingController,
  getUserBookingsController,
  getAllBookingsController,
  cancelBookingController,
} from "../controllers/booking.controller.js";
import authMiddleware from "../middlewares/auth.js";
import roleCheck from "../middlewares/roleCheck.js";
const router = express.Router();

// Student endpoints
router.post("/", authMiddleware, createBookingController);
router.get("/my", authMiddleware, getUserBookingsController);
router.delete("/:bookingId", authMiddleware, cancelBookingController);

// Admin endpoint
router.get("/", authMiddleware, roleCheck("admin"), getAllBookingsController);

export default router;
