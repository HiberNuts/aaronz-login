import { PropListings } from "../models/listingsModel.js";

const postListings = async (req, res) => {
  try {
    const data = req.body;

    const Listing = await PropListings.create(data);

    if (Listing) {
      res.json(Listing);
    }
  } catch (err) {
    console.log(`Error in posting the listings ${err}`);
  }
};

const getListings = async (req, res) => {
  try {
    const result = await PropListings.find({});
    res.json(result);
  } catch (err) {
    console.log(`Error while getting the listings ${err} `);
  }
};

export { postListings, getListings };
