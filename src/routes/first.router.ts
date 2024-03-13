import { NextFunction, Router, Request, Response } from "express";
import restClient from '../utils/rest.client'

const router: Router = Router();
const url = process.env.NEXT_PUBLIC_NEWSURL;

router.get(
  "/name",
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    return res.status(200).json({ name: "vishal mishra", age: 23 });
  }
);


router.post('/v1/news', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      const response = await restClient.post(`${url}/v1/news`, req.body);
      res.json(response.data);
  } catch (err: any) {
      next(err);
  }
});



export default router;
