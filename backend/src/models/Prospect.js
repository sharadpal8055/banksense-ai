import mongoose from "mongoose";

const prospectSchema = new mongoose.Schema(
  {
    name: String,

    phone: String,

    income: Number,

    existingEMI: Number,

    loanInterest: Number,

    loanPageVisits: Number,

    emiCalculatorUsed: Boolean,

    applyClicked: Boolean,

    riskLevel: {
      type: String,

      enum: ["LOW", "MEDIUM", "HIGH"],
    },

    status: {
      type: String,

      enum: ["HOT", "WARM", "COLD"],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Prospect", prospectSchema);
