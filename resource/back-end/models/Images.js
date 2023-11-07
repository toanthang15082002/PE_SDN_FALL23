import mongoose, { ObjectId, Schema } from "mongoose";

const Images = mongoose.model(
  "Images",
  new Schema({
    id: ObjectId,
    path: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    caption: {
      type: String,
      require: true,
    },
    createdAt: { 
      type: Date,
      require: true,
    },
    
  })
);
export default Images;
