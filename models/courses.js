import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  levelno: { type: String, required: true },
  priceBefore: { type: Number, required: true },
  priceAfter: { type: Number, required: true },
  duration: { type: Number, required: true },
  totalTime: { type: String, required: true },
  sessionPerWeek: { type: mongoose.Schema.Types.Mixed, required: true },
  // can be number or string like "2-3"
  Hours: { type: Number, required: true },
  scheduleType: { type: String, required: true },
});

const languageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  studentNo: { type: String, required: true },
  Options: [optionSchema],
});

const courseSchema = new mongoose.Schema(
  {
    IELTS: {
      en: languageSchema,
      ar: languageSchema,
    },
    Group: {
      en: languageSchema,
      ar: languageSchema,
    },
    Private: {
      en: languageSchema,
      ar: languageSchema,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
