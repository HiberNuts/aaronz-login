import express from "express";
const listingsRouter = express.Router();
import { postListings, getListings } from "../controllers/listingsController.js";

listingsRouter.route("/").post(postListings);
listingsRouter.route("/").get(getListings);

export default listingsRouter;
