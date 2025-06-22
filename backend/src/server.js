import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import userTypeRoutes from "./routes/userTypeRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5003;

const app = express();

connectDB(); //middleware
app.use(express.json());

app.use("/api/home", userRoutes);
app.use("/api/home", userTypeRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
});
