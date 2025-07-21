import Team from "../models/Team.js";

export async function createTeam(req, res) {
  try {
    const { teamname, description } = req.body;
    const team = new Team({ teamname, description });

    const savedteam = await team.save();
    res.status(201).json(savedteam);
  } catch (error) {
    console.error("Error in createTeam controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
