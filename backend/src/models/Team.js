import mongoose from "mongoose";

// 1 - create a schema
const teamSchema = new mongoose.Schema(
  {
    teamname: {
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
const Team = mongoose.model("team", teamSchema);

export default Team;
