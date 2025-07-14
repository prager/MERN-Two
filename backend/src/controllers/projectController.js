import UserType from "../models/Project.js";

export async function createProject(req, res) {
  try {
    const { projname, description } = req.body;
    const project = new UserType({ projname, description });

    const savedproject = await project.save();
    res.status(201).json(savedproject);
  } catch (error) {
    console.error("Error in createProject controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
