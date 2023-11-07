import mongoose, { ObjectId, Schema } from "mongoose";

const Tutorials = mongoose.model(
  "Tutorials",
  new Schema({
    id: ObjectId,
    path: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    images: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Images",
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        caption: {
          type: String,
          required: true,
        },
      },
    ],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    }],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
  })
);
export default Tutorials;
