import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middlewares/errorHandler.js";

// Routes imports
import authRoutes from "./routes/auth.routes.js";
import courseRoutes from "./routes/courses.routes.js";
import availabilityRoutes from "./routes/availability.routes.js";
import freeSessionRoutes from "./routes/freeSession.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // your frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/freesessions", freeSessionRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Endpoint not found" });
});

// Global error handler
app.use(errorHandler);

export default app;
