import { Schema, model } from "mongoose";

const diseaseSchema = new Schema(
  {
    disease: {
      type: String,
      required: true,
      trim: true,
    },
    symptoms: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    prevention: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Disease = model("Disease", diseaseSchema);

export default Disease;
