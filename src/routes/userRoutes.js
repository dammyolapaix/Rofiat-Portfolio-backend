import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// router.post("/api/users/register", async (req, res) => {
//   const salt = bcrypt.genSaltSync(10);

//   const hashedPassword = await bcrypt.hash(req.body.password, salt);

//   req.body.password = hashedPassword;

//   const user = await User.create(req.body);

//   res.status(201).json({ user: user });
// });

router.post("/api/users/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  console.log(user);

  // if (req.body.password === user.password) {
  //   console.log("password match");
  // } else {
  //   console.log("Password does not match");
  // }

  if (user === null) {
    console.log("Error: Invalid credentials");
  }
  const isPasswordMatch = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordMatch === false) {
    console.log("Error: Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "30d" });

  console.log(token);

  // const user = await User.create(req.body);

  res.status(201).json({ token: token });
});

export const registerAdmin = async () => {
  const adminInfo = {
    name: "Aziz",
    password: "hello-password",
    email: "aziz@gmail.com",
  };

  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = await bcrypt.hash(adminInfo.password, salt);

  adminInfo.password = hashedPassword;

  const user = await User.create(adminInfo);

  if (user) {
    console.log("User created");
  }
};

export default router;
