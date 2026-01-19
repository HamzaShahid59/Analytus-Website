import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Please provide a job title"],
    },
    location: {
      type: String,
      required: [true, "Please provide a location"],
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract", "Temporary", "Internship"],
      required: [true, "Please select a job type"],
    },
    salary: {
      type: Number,
      required: [true, "Please provide a salary range"],
    },
    description: {
      type: String,
      required: [true, "Please provide a job description"],
    },
    workingHours: {
      type: String,
      required: [true, "Please provide working hours"],
    },
    applyAt: {
      type: String,
      required: [true, "Please provide application email/link"],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Important in Next.js (hot reload): prevent model overwrite error
export default mongoose.models.Job || mongoose.model("Job", jobSchema);
