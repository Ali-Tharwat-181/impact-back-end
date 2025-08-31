// services/freeSession.service.js
import FreeSession from "../models/freeSession.js";
import Availability from "../models/availability.js";

export const bookSession = async (data) => {
  const { availability, slot } = data;

  // find availability (string id is automatically casted)
  const availabilityDoc = await Availability.findById(availability);
  if (!availabilityDoc) throw new Error("Availability not found");

  // find slot
  const slotDoc = availabilityDoc.slots.find(
    (s) => s.start === slot.start && s.end === slot.end
  );
  if (!slotDoc) throw new Error("Slot not found");

  // check if booked
  if (slotDoc.isBooked) throw new Error("Slot already booked");

  // create booking
  const booking = await FreeSession.create(data);

  // update slot status
  slotDoc.isBooked = true;
  await availabilityDoc.save();

  return booking;
};

export const getAllBookings = async () => {
  return await FreeSession.find();
};

export const getBookingById = async (id) => {
  return await FreeSession.findById(id).populate("availability");
};

export const deleteBooking = async (id) => {
  return await FreeSession.findByIdAndDelete(id);
};
