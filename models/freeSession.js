import mongoose from "mongoose";

const freeSessionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    phoneNumber: { type: String, required: true, trim: true },
    country: { type: String, required: true },
    option: {
      type: String,
      required: true,
      enum: ["free session", "free test"],
    },

    // reference to chosen slot
    availability: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Availability",
      required: true,
    },
    slot: {
      start: { type: String, required: true },
      end: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const FreeSession = mongoose.model("FreeSession", freeSessionSchema);

export default FreeSession;
