import express from "express";
import { buyRequest, getBuyRequest, getRequestByUserId } from "../controllers/buyerController.js";

const buyRouter = express.Router();

buyRouter.route("/").post(buyRequest);
buyRouter.route("/").get(getBuyRequest);
buyRouter.route("/:id").get(getRequestByUserId);

export default buyRouter;
