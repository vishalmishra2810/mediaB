import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import Router from "./routes";

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

app.use(express.json());
app.use("/", Router);

app.get("/", (req, res) => {
  res.send("Welcome to your APIs!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
