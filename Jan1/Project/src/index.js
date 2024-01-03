import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();

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
