import Position from "../models/Position.js";

export async function createPosition(req, res) {
  try {
    const { positionname, teamID, description } = req.body;
    const position = new Position({ positionname, teamID, description });

    const savedposition = await position.save();
    res.status(201).json(savedposition);
  } catch (error) {
    console.error("Error in createPosition controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
