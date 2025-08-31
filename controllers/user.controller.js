// controllers/user.controller.js
import * as userService from "../services/user.service.js";

// Get all students
export const getAllStudentsController = async (req, res) => {
  try {
    const students = await userService.getAllStudents();
    res.status(200).json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get student by ID
export const getStudentByIdController = async (req, res) => {
  try {
    const student = await userService.getStudentById(req.params.id);
    res.status(200).json({ success: true, data: student });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// Create new user (admin can choose role)
export const createNewUserController = async (req, res) => {
  try {
    const newUser = await userService.createNewUser(req.body);
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update user
export const updateUserController = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete user
export const deleteUserController = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    res.status(200).json({ success: true, data: deletedUser });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const getAllNonStudentsController = async (req, res) => {
  try {
    const users = await userService.getAllNonStudents();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
