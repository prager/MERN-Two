import Task from "../models/Task.js";

export async function createTask(req, res) {
  try {
    const { taskname, positionID, description } = req.body;
    const task = new Task({ taskname, positionID, description });

    const savedtask = await task.save();
    res.status(201).json(savedtask);
  } catch (error) {
    console.error("Error in createTask controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
