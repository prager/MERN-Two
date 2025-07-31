import mongoose from "mongoose";

// 1 - create a schema
const positionSchema = new mongoose.Schema(
  {
    positionname: {
      type: String,
      required: true,
    },
    teamID: {
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
const Position = mongoose.model("position", positionSchema);

export default Position;
