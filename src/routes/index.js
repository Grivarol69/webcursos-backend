import { Router } from "express";
import userRouter from "./UserRouter.js";


const router = Router();

router.use('/api/users', userRouter);

export default router;