// app.ts or server.ts

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import firstRouter from "./routes/first.router";
import cors from "cors";

const app = express();
const PORT = 8080;

// MongoDB connection URL
const MONGODB_URI = "mongodb+srv://journalmotionlive:KpLg6VGk9DkPH7yh@jmotion.dslkyer.mongodb.net/?retryWrites=true&w=majority&appName=JMotion";

// Define MongoDB connection options
const mongooseOptions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  });

// Use CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Define routes
app.use("/api", firstRouter);

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to your APIs!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
