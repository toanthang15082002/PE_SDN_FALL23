import mongoose from "mongoose";

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  return connection;
};

export default connectDB;
