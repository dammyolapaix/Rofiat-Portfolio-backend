import mongoose from "mongoose";

// Define schema
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name of the project is required"],
  },
  description: {
    type: String,
    required: [true, "The description of the project is required"],
  },
  image: String,
  // images: [
  //   {
  //     type: String,
  //   },
  // ],
  repos: [
    {
      name: {
        type: String,
        required: [true, "The name of the repo is required"],
      },
      link: {
        type: String,
        required: [true, "The repo link is required"],
      },
    },
  ],
  liveDemo: [
    {
      name: {
        type: String,
        required: [true, "The live demo name of the repo is required"],
      },
      link: {
        type: String,
        required: [true, "The live demo link is required"],
      },
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
