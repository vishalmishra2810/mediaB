"use strict";
// app.ts or server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const first_router_1 = __importDefault(require("./routes/first.router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 8080;
// MongoDB connection URL
const MONGODB_URI = "mongodb+srv://journalmotionlive:KpLg6VGk9DkPH7yh@jmotion.dslkyer.mongodb.net/?retryWrites=true&w=majority&appName=JMotion";
// Define MongoDB connection options
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
// Connect to MongoDB
mongoose_1.default.connect(MONGODB_URI, mongooseOptions)
    .then(() => {
    console.log("MongoDB connected");
})
    .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
});
// Use CORS middleware
app.use((0, cors_1.default)());
// Parse JSON bodies
app.use(express_1.default.json());
// Define routes
app.use("/api", first_router_1.default);
// Default route
app.get("/", (req, res) => {
    res.send("Welcome to your APIs!");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
