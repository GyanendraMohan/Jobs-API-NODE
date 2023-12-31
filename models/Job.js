const { required } = require("joi");
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please Provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please Provide company name"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "decline", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please Provide User"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
