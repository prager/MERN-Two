import TeamMember from "../models/TeamMember.js";

export async function createTeamMember(req, res) {
  try {
    const { fname, lname, positionID, teamID, email, password } = req.body;
    const teamMember = new TeamMember({
      fname,
      lname,
      positionID,
      teamID,
      email,
      password,
    });

    const savedTeamMember = await teamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (error) {
    console.error("Error in createTeamMember controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
