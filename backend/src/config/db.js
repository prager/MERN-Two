import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB for mern_two connected OK");
  } catch (error) {
    console.error("Error in connection to DB", error);
    process.exit(1);
  }
};
