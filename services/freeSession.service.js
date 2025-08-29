// services/freeSession.service.js
import FreeSession from "../models/freeSession.js";
import Availability from "../models/availability.js";

export const bookSession = async (data) => {
  const { availabilityId, start, end } = data;

  // find availability
  const availability = await Availability.findById(availabilityId);
  if (!availability) throw new Error("Availability not found");

  // find slot
  const slot = availability.slots.find(
    (s) => s.start === start && s.end === end
  );
  if (!slot) throw new Error("Slot not found");

  // check if booked
  if (slot.isBooked) throw new Error("Slot already booked");

  // create booking
  const booking = await FreeSession.create(data);

  // update slot status
  slot.isBooked = true;
  await availability.save();

  return booking;
};

export const getAllBookings = async () => {
  return await FreeSession.find().populate("availability");
};

export const getBookingById = async (id) => {
  return await FreeSession.findById(id).populate("availability");
};

export const deleteBooking = async (id) => {
  return await FreeSession.findByIdAndDelete(id);
};
