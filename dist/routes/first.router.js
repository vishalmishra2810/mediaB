"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/name", async (req, res, next) => {
    return res.status(200).json({ name: "Hi, I'm vishal" });
});
exports.default = router;
