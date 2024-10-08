import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  username: { type: String },
});
export default mongoose.model("User", userSchema);
