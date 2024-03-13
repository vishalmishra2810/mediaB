import { NextFunction, Router, Request, Response } from "express";

const router: Router = Router();

router.get(
  "/name",
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    return res.status(200).json({ name: "vishal mishra", age: 23 });
  }
);

router.post('/v1/news', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    return res.status(200).json(req.body);
  } catch (err: any) {
    next(err);
  }
});



export default router;
