import mongoose from "mongoose";

// 1 - create a schema
const userTypeSchema = new mongoose.Schema(
  {
    typename: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// 2 - create a model based off of that schema
const UserType = mongoose.model("UserType", userTypeSchema);

export default UserType;
