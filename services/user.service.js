import User from "../models/User.js";

export const getAllStudents = async () => {
  try {
    const students = await User.find({ role: "student" });
    return students;
  } catch (error) {
    throw new Error("Error fetching students: " + error.message);
  }
};

export const getStudentById = async (id) => {
  try {
    const student = await User.findById(id);
    if (!student || student.role !== "student") {
      throw new Error("Student not found");
    }
    return student;
  } catch (error) {
    throw new Error("Error fetching student: " + error.message);
  }
};

export const createNewUser = async (userData) => {
  try {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("User already exists.");
    }
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

export const updateUser = async (id, updateData) => {
  try {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};

export const getAllNonStudents = async () => {
  try {
    const users = await User.find({ role: { $ne: "student" } });
    return users;
  } catch (error) {
    throw new Error("Error fetching non-students: " + error.message);
  }
};
