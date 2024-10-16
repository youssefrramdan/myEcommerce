import { Router } from "express";
import { checkEmail } from "../middlewares/checkEmail.js";
import { changeUserPassword, protectedRoutes, Signin, Signup } from "./auth.controller.js";

const authRouter = Router();
authRouter.post('/signup', checkEmail,Signup)
authRouter.post('/signin',Signin) 
authRouter.patch("/changepassword" ,changeUserPassword)

export default authRouter ;