import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  express.cor({
    origin: process.env.CORS_ORIGIN,
    Credential: true
  })
);

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

export { app };
