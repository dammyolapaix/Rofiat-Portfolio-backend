import express from "express";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import userRoutes, { registerAdmin } from "./routes/userRoutes.js";
import connectDB from "../config/db.js";
import cors from "cors";

// const upload = multer({ dest: "uploads/" });

dotenv.config();

// Initializing your application
const app = express();

// app.post("/api/uploads", upload.single("avatar"), (req, res, next) => {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any

//   console.log(req.file);
//   // if (req.file.mimetype !== "image/jpeg") {
//   //   res.json({ msg: "You must upload a jpeg image" });
//   // }

//   // if (req.file.size >= 2048) {
//   //   res.json({ msg: "The maximum size should be 2MB" });
//   // }

//   res.json({ msg: "Your upload for successful" });
// });

// 1024

// console.log(Date.now());
console.log(Math.round(Math.random() * 1e9));

app.use(cors({ origin: process.env.FRONTEND_URL }));

// Replaces body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

app.use(projectRoutes);
app.use(userRoutes);

// registerAdmin();

// app.get("/projects", (req, res) => {
//   res.json({ msg: "This is the projects routes" });
// });

app.listen(PORT, async () => {
  await connectDB();
  console.log(`App started on port ${PORT}`);
});
