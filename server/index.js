import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { log, error } from "console";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
dotenv.config();

const port = process.env.PORT || process.env.API_PORT;
if (!port) {
  throw new Error("PORT or API_PORT environment variable is not set");
}

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

app.use("*", (req, res) => {
  res.status(404).send("Route not found");
});

const server = http.createServer(app);

mongoose
  .connect(process.env.mongo)
  .then(() => {
    server.listen(port, (err) => {
      if (err) {
        error(`Error starting server: ${err.message}`);
        process.exit(1);
      }
      log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => log("Database connection failed " + err));
