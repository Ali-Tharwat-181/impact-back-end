// controllers/booking.controller.js
import {
  createBooking,
  getUserBookings,
  getAllBookings,
  cancelBooking,
} from "../services/booking.service.js";

export const createBookingController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { courseCategory, optionId } = req.body;

    const booking = await createBooking(userId, { courseCategory, optionId });

    res.status(201).json({ message: "Booking created", booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserBookingsController = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await getUserBookings(userId);
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllBookingsController = async (req, res) => {
  try {
    const bookings = await getAllBookings();
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const cancelBookingController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { bookingId } = req.params;

    const booking = await cancelBooking(bookingId, userId);

    res.json({ message: "Booking cancelled", booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
