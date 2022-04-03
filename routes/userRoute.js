// for user routes
import express from "express";

import {
  getUser,
  registerUser,
  loginUser,
  getUserRequest,
  getUserbyId,
  verifyUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/verify").post(verifyUser);
userRouter.route("/getuser").get(getUser);
userRouter.route("/getuser:id").get(getUserbyId);

export default userRouter;

// userRouter.route("/request").get(getUserRequest);
