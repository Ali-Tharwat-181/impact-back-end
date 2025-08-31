import Booking from "../models/bookings.js";
import Course from "../models/courses.js";

export const createBooking = async (
  userId,
  { courseId, optionId, lang = "en" }
) => {
  // Find the specific course
  const course = await Course.findById(courseId);
  if (!course) throw new Error("Course not found");

  // Access correct language data (en or ar)
  const courseLangData = course[lang];
  if (!courseLangData) throw new Error(`Course data not available in ${lang}`);

  // Find selected option
  const selectedOption = courseLangData.Options.find(
    (opt) => opt.id === optionId
  );
  if (!selectedOption) throw new Error("Selected option not found");

  // Create booking
  const booking = await Booking.create({
    student: userId,
    course: course._id,
    category: course.type, // directly from course.type
    optionId,
  });

  return booking;
};

export const getUserBookings = async (userId) => {
  return await Booking.find({ student: userId })
    .populate("course")
    .populate("student", "name email");
};

export const getAllBookings = async () => {
  return await Booking.find()
    .populate("course")
    .populate("student", "name email");
};

export const cancelBooking = async (bookingId, userId) => {
  const booking = await Booking.findOne({ _id: bookingId, student: userId });
  if (!booking) throw new Error("Booking not found or not authorized");

  booking.status = "cancelled";
  await booking.save();

  return booking;
};
