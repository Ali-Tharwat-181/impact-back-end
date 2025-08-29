import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  start: { type: String, required: true }, // e.g. "10:00"
  end: { type: String, required: true }, // e.g. "10:30"
  isBooked: { type: Boolean, default: false }, // mark booked slots
});

const availabilitySchema = new mongoose.Schema(
  {
    date: { type: String, required: true }, // e.g. "2025-07-22"
    day: { type: String, required: true }, // e.g. "Monday"
    slots: [slotSchema],
  },
  { timestamps: true }
);

const Availability = mongoose.model("Availability", availabilitySchema);

export default Availability;
