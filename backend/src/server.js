import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import userTypeRoutes from "./routes/userTypeRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/auth.js";
import protect from "./middleware/authMiddleware.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5003;

const app = express();

// Allow requests from your React app
app.use(
  cors({
    origin: "http://localhost:5173", // allow only your frontend
    credentials: true, // if using cookies/sessions
  })
);

app.get("/api/profile", protect, (req, res) => {
  res.json({ user: req.user });
});

connectDB(); //middleware
app.use(express.json());

app.use("/api/home", userRoutes);
app.use("/api/home", userTypeRoutes);
app.use("/api/home", projectRoutes);
app.use("/api/home", authRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
});
