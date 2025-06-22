import UserType from "../models/UserType.js";

export async function getUsrTypes(req, res) {
  try {
    const types = await UserType.find();
    res.status(200).json(types);
  } catch (error) {
    console.error("Error in getAllClients controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUsrType(req, res) {
  try {
    const type = await UserType.findById(req.params.id);
    if (!type) return res.status(404).json({ message: "User type not found!" });

    res.status(200).json(type);
  } catch (error) {
    console.error("Error in getAllClients controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createUsrType(req, res) {
  try {
    const { typename, description } = req.body;
    const usrType = new UserType({ typename, description });

    const savedUsrType = await usrType.save();
    res.status(201).json(savedUsrType);
  } catch (error) {}
}

export async function deleteUsrType(req, res) {
  try {
    const deleteUserType = await UserType.findByIdAndDelete(req.params.id);
    if (!deleteUserType)
      return res.status(404).json({ message: "UserType not found" });
    res.json({ message: "UserType deleted successfully" });
  } catch (error) {
    console.error("Error in deleteUserType controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateUsrType(req, res) {
  try {
    const { typename, description } = req.body;
    const updateUserType = await UserType.findByIdAndUpdate(
      req.params.id,
      { typename, description },
      { new: true }
    );
    if (!updateUserType)
      return res.status(404).json({ message: "UserType not found" });
    res.status(200).json({ message: "User updated OK" });
  } catch (error) {
    console.error("Error in updateUserType controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
