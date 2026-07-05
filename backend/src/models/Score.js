import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    prospect: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Prospect",
    },

    incomeScore: Number,

    intentScore: Number,

    riskScore: Number,

    finalScore: Number,

    recommendation: String,

    explanation: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Score", scoreSchema);
