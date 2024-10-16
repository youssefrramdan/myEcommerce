import { Schema, model } from "mongoose";
const schema = new Schema(
  {
    title: String,
    imgUrl: String,
    images: [String],
  },
  { timestamps: true, versionKey: true }
);

schema.post("init", function (doc) {
  if (doc.logo) {
    doc.logo = "http://localhost:3000/uploads/brands/" + doc.image;
  }
});


export const Photo = model("Photo" , schema)