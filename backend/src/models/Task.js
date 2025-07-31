import mongoose from "mongoose";

// 1 - create a schema
const taskSchema = new mongoose.Schema(
  {
    taskname: {
      type: String,
      required: true,
    },
    positionID: {
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
const Task = mongoose.model("task", taskSchema);

export default Task;
