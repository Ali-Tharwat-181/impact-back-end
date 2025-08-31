// routes/course.routes.js
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
import roleCheck from "../middlewares/roleCheck.js";
import authMiddleware from "../middlewares/auth.js";

import { Router } from "express";
const router = Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", authMiddleware, roleCheck("admin"), createCourse);
router.put("/:id", authMiddleware, roleCheck("admin"), updateCourse);
router.delete("/:id", authMiddleware, roleCheck("admin"), deleteCourse);

export default router;
