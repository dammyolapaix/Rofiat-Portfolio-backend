import mongoose from "mongoose";

// Define schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  email: {
    type: String,
    required: [true, "Your email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
