import express from "express";
const listingsRouter = express.Router();
import { postListings, getListings, filterListings } from "../controllers/listingsController.js";

listingsRouter.route("/").post(postListings);
listingsRouter.route("/").get(getListings);
listingsRouter.route("/filter").get(filterListings);

export default listingsRouter;
