// routes/first.router.ts

import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/name", async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    return res.status(200).json({ name: "vishal mishra", age: 23 });
  } catch (err) {
    next(err); 
  }
});

router.post('/news', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    return res.status(200).json({ message: 'Success' });
  } catch (err) {
    next(err); 
  }
});

export default router;
