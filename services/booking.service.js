// services/booking.service.js
import Booking from "../models/bookings.js";
import Course from "../models/courses.js";

export const createBooking = async (userId, { courseCategory, optionId }) => {
  const course = await Course.findOne({});
  if (!course) throw new Error("No courses available");

  const courseCategoryData = course[courseCategory]?.en; // default to English
  if (!courseCategoryData) throw new Error("Course category not found");

  const selectedOption = courseCategoryData.Options.find(
    (opt) => opt.id === optionId
  );
  if (!selectedOption) throw new Error("Selected option not found");

  // Create booking
  const booking = await Booking.create({
    student: userId,
    course: course._id,
    category: courseCategory,
    optionId,
  });

  return booking;
};

export const getUserBookings = async (userId) => {
  return await Booking.find({ student: userId }).populate("course");
};

export const getAllBookings = async () => {
  return await Booking.find().populate("student course");
};

export const cancelBooking = async (bookingId, userId) => {
  const booking = await Booking.findOne({ _id: bookingId, student: userId });
  if (!booking) throw new Error("Booking not found or not authorized");

  booking.status = "cancelled";
  await booking.save();

  return booking;
};
