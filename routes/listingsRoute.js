import express from "express";
const listingsRouter = express.Router();
import { postListings, getListings, filterPrice } from "../controllers/listingsController.js";

listingsRouter.route("/").post(postListings);
listingsRouter.route("/").get(getListings);
listingsRouter.route("/filter/price").get(filterPrice);

export default listingsRouter;
