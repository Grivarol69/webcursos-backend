import { Router } from 'express';
import { saludar } from '../controllers/userController.js';

const userRouter = Router();


userRouter.get('/saludar', saludar);

export default userRouter;