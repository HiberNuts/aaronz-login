// for user routes
import express from "express";

import {
   getUser,
   registerUser,
   loginUser,
   getUserRequest,
   getUserbyId,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/").get(getUser);
router.route("/login").post(loginUser);
// router.route("/request").get(getUserRequest);
router.route("/:id").get(getUserbyId);

export default router;
