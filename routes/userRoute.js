// for user routes
import express from "express";

import { getUser, registerUser, loginUser, getUserRequest, getUserbyId } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/getuser").get(getUser);
userRouter.route("/login").post(loginUser);
// userRouter.route("/request").get(getUserRequest);
userRouter.route("/getuser:id").get(getUserbyId);

export default userRouter;
