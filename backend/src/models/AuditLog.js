import mongoose from "mongoose";

const auditSchema = new mongoose.Schema(
  {
    // Type of event stored
    eventType: {
      type: String,

      enum: ["AI_SCORE_GENERATED", "BANKER_ACTION", "FEEDBACK_CAPTURED"],

      required: true,
    },

    // Connect audit with customer

    prospect: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Prospect",
    },

    // HOT / WARM / COLD or banker decision

    decision: {
      type: String,
    },

    // AI reasoning

    explanation: {
      type: String,
    },

    // Who performed action

    performedBy: {
      type: String,

      default: "BankSense AI",
    },

    // AI model traceability

    modelVersion: {
      type: String,

      default: "BankSense-AI-v1",
    },

    // RBI style compliance flag

    complianceStatus: {
      type: String,

      enum: ["APPROVED", "REVIEW_REQUIRED"],

      default: "APPROVED",
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.model(
  "AuditLog",

  auditSchema,
);
