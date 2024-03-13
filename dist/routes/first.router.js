"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/name", async (req, res, next) => {
    return res.status(200).json({ name: "vishal mishra", age: 23 });
});
router.post('/v1/news', async (req, res, next) => {
    try {
        const response = await rest_client_1.default.post(`${url}/v1/news`, req.body);
        res.json(response.data);
    }
    catch (err) {
        next(err);
    }
});
exports.default = router;
