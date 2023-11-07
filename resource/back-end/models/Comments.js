import mongoose, { ObjectId, Schema } from "mongoose";

const Comments = mongoose.model(
  "Comments",
  new Schema({
    id: ObjectId,
    username: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    createdAt: { 
      type: Date,
      require: true,
    },
    
  })
);
export default Comments;
