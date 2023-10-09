import { Router } from "express";
import FirstRouter from "./first.router";
const router: Router = Router();
router.use("/api", FirstRouter);

export default router;
