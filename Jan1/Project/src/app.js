import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

// import
import userRouter from "./routes/user.routes.js";

// Declaration
app.use("/api/v1/user", userRouter);

export { app };
