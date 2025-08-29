// services/course.service.js
import Course from "../models/courses.js";

export const getAllCourses = async () => {
  return await Course.find();
};

export const getCourseById = async (id) => {
  return await Course.findById(id);
};

export const createCourse = async (data) => {
  return await Course.create(data);
};

export const updateCourse = async (id, data) => {
  return await Course.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};
