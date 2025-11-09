import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    companyLogo: {
      type: String, // URL to the logo image or uploaded file path
    },
    description: {
      type: String, // Supports HTML / Markdown
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
    applyLink: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
