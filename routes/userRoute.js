// for user routes
import express from "express";
import { getUser, registerUser, loginUser } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/").get(getUser);
router.route("/login").post(loginUser);

export default router;
