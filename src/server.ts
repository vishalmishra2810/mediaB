// src/server.ts
import express from "express";
import Router from "./routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", Router);

app.get("/", (req, res) => {
  res.send("Welcome to your API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
