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

export async function getAllTeams(req, res) {
  try {
    const teams = await Team.find();
    //res.status(200).send("all good!");
    res.status(200).json(teams);
  } catch (error) {
    console.error("Error in getAllTeams controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getTeam(req, res) {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found!" });
    res.status(200).json(team);
  } catch (error) {
    console.error("Error in getTeam controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteTeam(req, res) {
  try {
    const deleteTeam = await Team.findByIdAndDelete(req.params.id);
    if (!deleteTeam) return res.status(404).json({ message: "Team not found" });
    res.json({ message: "Team deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTeam controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
