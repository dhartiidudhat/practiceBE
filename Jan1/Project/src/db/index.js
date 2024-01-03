import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const dbInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`Db Connected Successfully !`, dbInstance.connection.host);
  } catch (error) {
    console.log("DB Connection Failed !", error);
    process.exit(1);
  }
};

export default connectDB
