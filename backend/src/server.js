import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import userTypeRoutes from "./routes/userTypeRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import teamMemberRoutes from "./routes/teamMemberRoutes.js";
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/taskRoutes.js";
import positionRoutes from "./routes/positionRoutes.js";
import protect from "./middleware/authMiddleware.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5003;

const app = express();

// Allow requests from your React app
const allowedOrigins = ["http://localhost:5173", "https://web2.leho-62.info"];
app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.get("/api/profile", protect, (req, res) => {
  res.json({ user: req.user });
});

connectDB(); //middleware
app.use(express.json());

app.use("/api/home", userRoutes);
app.use("/api/home", userTypeRoutes);
app.use("/api/home", teamRoutes);
app.use("/api/home", authRoutes);
app.use("/api/home", teamMemberRoutes);
app.use("/api/home", positionRoutes);
app.use("/api/home", taskRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
});
