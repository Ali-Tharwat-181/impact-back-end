import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect DB and start server
connectDB(MONGO_URI);

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));
