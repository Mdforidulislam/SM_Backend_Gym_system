

import { Router } from "express";
import authController from "./auth.controller";


const authRouter = Router();


authRouter.post('/login', authController.login as any);
authRouter.post('/logout', authController.logout as any);


export default authRouter;






