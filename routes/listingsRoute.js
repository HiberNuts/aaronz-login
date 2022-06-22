import express from "express";
const listingsRouter = express.Router();
import {
  postListings,
  getListings,
  filterListings,
  getLimitedListings,
  searchListings,
} from "../controllers/listingsController.js";

listingsRouter.route("/").post(postListings);
listingsRouter.route("/").get(getListings);
listingsRouter.route("/filter").get(filterListings);
listingsRouter.route("/lim").get(getLimitedListings);
listingsRouter.route("/search/:name").get(searchListings);
listingsRouter.route("/search").get(getListings);

export default listingsRouter;
