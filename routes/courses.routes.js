// routes/course.routes.js
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
import roleCheck from "../middlewares/roleCheck.js";

import { Router } from "express";
const router = Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", roleCheck("admin"), createCourse);
router.put("/:id", roleCheck("admin"), updateCourse);
router.delete("/:id", roleCheck("admin"), deleteCourse);

export default router;
