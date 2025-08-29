// controllers/availability.controller.js
import * as AvailabilityService from "../services/availability.service.js";

export const createAvailability = async (req, res) => {
  try {
    const availability = await AvailabilityService.createAvailability(req.body);
    res.status(201).json(availability);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllAvailability = async (req, res) => {
  try {
    const availability = await AvailabilityService.getAllAvailability();
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAvailabilityById = async (req, res) => {
  try {
    const availability = await AvailabilityService.getAvailabilityById(
      req.params.id
    );
    if (!availability)
      return res.status(404).json({ message: "Availability not found" });
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAvailability = async (req, res) => {
  try {
    const deleted = await AvailabilityService.deleteAvailability(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Availability not found" });
    res.status(200).json({ message: "Availability deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
