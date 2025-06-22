import mongoose from "mongoose";

// 1 - create a schema
const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pwd: {
      type: String,
      required: true,
    },
    usrtype: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// 2 - create a model based off of that schema
const User = mongoose.model("User", userSchema);

export default User;
