import { NextFunction, Router, Request, Response } from "express";

const router: Router = Router();

router.get(
  "/name",
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    return res.status(200).json({ name: "Hi, I'm vishal mishra", age: 23 });
  }
);

export default router;
