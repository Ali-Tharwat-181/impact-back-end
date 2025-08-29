// services/availability.service.js
import Availability from "../models/availability.js";

export const createAvailability = async (data) => {
  return await Availability.create(data);
};

export const getAllAvailability = async () => {
  return await Availability.find();
};

export const getAvailabilityById = async (id) => {
  return await Availability.findById(id);
};

export const deleteAvailability = async (id) => {
  return await Availability.findByIdAndDelete(id);
};
