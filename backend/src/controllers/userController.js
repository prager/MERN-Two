import User from "../models/User.js";

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    //res.status(200).send("all good!");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getAllClients controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found!" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getAllClients controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createUser(req, res) {
  try {
    const { fname, lname, email, pwd, usrtype } = req.body;
    const usr = new User({ fname, lname, email, pwd, usrtype });

    const savedUsr = await usr.save();
    res.status(201).json(savedUsr);
  } catch (error) {}
}

export async function deleteUser(req, res) {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleteUser controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateUser(req, res) {
  try {
    const { fname, lname, email, pwd, usrtype } = req.body;
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { fname, lname, email, pwd, usrtype },
      { new: true }
    );
    if (!updateUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated OK" });
  } catch (error) {
    console.error("Error in updateUser controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
