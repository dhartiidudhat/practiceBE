import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(` Express App not work !`, error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`App llisten on Port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB connection Failed !", error);
    process.exit(1);
  });

/*
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constant.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});
(async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(`db Connected Success!`, dbConnection.connection.host);
  } catch (error) {
    console.log(`Error Db Connection failed`, error);
    throw error;
  }
})();
*/
