import mongoose, { ObjectId, Schema } from "mongoose";

const Categories = mongoose.model(
  "Categories",
  new Schema({
    id: ObjectId,
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },    
  })
);
export default Categories;
