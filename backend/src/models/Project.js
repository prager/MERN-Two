import mongoose from "mongoose";

// 1 - create a schema
const projectSchema = new mongoose.Schema(
  {
    projname: {
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
const Project = mongoose.model("project", projectSchema);

export default Project;
