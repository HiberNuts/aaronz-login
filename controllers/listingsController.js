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

export { postListings };
