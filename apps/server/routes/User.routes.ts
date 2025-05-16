import express from "express"
import { signUp } from "../controllers/User.controller";

export const userRouter = express.Router();

userRouter.post("/sign-up",signUp);

