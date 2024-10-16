import mongoose, { Types } from "mongoose";

const schema = mongoose.Schema(
  {
    comment: String,
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    rate: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    product: {
      type: Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Review = mongoose.model("Review", schema);
