import express from "express";
const listingsRouter = express.Router();
import { postListings } from "../controllers/listingsController.js";

listingsRouter.route("/listings").post(postListings);

export default listingsRouter;
