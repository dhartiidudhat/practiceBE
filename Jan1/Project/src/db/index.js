import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import { app } from "../app.js";

const connectDB = async () => {
  try {
    const dbInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`Db Connected Successfully `, dbInstance.connection.host);
    app.on("error", () => {
      console.log("Express App not work !");
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listen on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("DB Connection error !", error);
    process.exit(1);
  }
};

export default connectDB;
