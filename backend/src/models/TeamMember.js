import mongoose from "mongoose";
import bcrypt from "bcrypt";

const teamMemberSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  positionID: { type: String },
  teamID: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

teamMemberSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

teamMemberSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
export default TeamMember;
