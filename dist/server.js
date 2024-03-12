"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
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
app.use(express_1.default.json());
app.use("/", routes_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to your APIs!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
