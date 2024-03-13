"use strict";
// routes/first.router.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/name", async (req, res, next) => {
    try {
        return res.status(200).json({ name: "vishal mishra", age: 23 });
    }
    catch (err) {
        next(err);
    }
});
router.post('/news', async (req, res, next) => {
    try {
        return res.status(200).json({ message: 'Success' });
    }
    catch (err) {
        next(err);
    }
});
exports.default = router;
