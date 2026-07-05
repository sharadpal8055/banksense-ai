import mongoose from "mongoose";

const bankerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,

      enum: ["BANKER", "ADMIN"],

      default: "BANKER",
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.model("Banker", bankerSchema);
