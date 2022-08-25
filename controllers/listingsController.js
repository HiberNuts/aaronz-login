// This controller is responsible for fetching listings

import { PropListings } from "../models/listingsModel.js";
import { parseString } from "xml2js";
import axios from "axios";
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
    var xmldata = await axios.get("http://xml.propspace.com/feed/xml.php?cl=3410&pid=9922&acc=1154");
    parseString(xmldata.data, function (err, results) {
      let Listings = JSON.stringify(results.Listings.Listing);
      res.send(Listings);
    });
  } catch (err) {
    console.log(`Error while getting the listings ${err} `);
  }
};

const getLimitedListings = async (req, res) => {
  try {
    const result = await PropListings.find({}).limit(14);
    res.json(result);
  } catch (err) {
    console.log(`Error while getting the listings ${err} `);
  }
};

const searchListings = async (req, res) => {
  try {
    // // const result = await PropListings.find({ Property_Name: { $regex: "/^" + req.params.name + "/" } });
    // const result = await PropListings.find({ Property_Name: new RegExp(req.params.name, "i") });
    // var xmldata = await axios.get("http://xml.propspace.com/feed/xml.php?cl=3410&pid=9922&acc=1154");
    // parseString(xmldata.data, function (err, results) {
    //   let datas = JSON.stringify(results);
    //   // const filter=datas.filter(data=>data.)
    //   res.send(data);
    // });
    // res.json(result);
    // var xmldata = await axios.get("http://xml.propspace.com/feed/xml.php?cl=3410&pid=9922&acc=1154");
    // parseString(xmldata.data, function (err, results) {
    //   let Listings = JSON.stringify(results.Listings.Listing);
    //   let data = Listings.forEach((listing) => {
    //     listing.filter((list) => list.Property_Name == new RegExp(req.params.name, "i"));
    //   });
    //   res.send(data);
    // });
  } catch (err) {
    console.log(`Error while filtering the listings ${err} `);
  }
};

const filterListings = async (req, res) => {
  try {
    const { rooms, adtype, bathroom, parking, tenanted } = req.query;
    let query = {};
    if (rooms) {
      query.Bedrooms = rooms;
    }
    if (adtype) {
      query.Ad_Type = adtype;
    }
    if (bathroom) {
      query.No_of_Bathroom = bathroom;
    }
    if (parking) {
      query.Parking = parking;
    }
    if (tenanted) {
      query.Tenanted = tenanted;
    }

    console.log(query);
    // const rooms = req.query.rooms;
    // const ad_type = req.query.ad_type;

    // const result = await PropListings.find({ $or: [{ Bedrooms: `${rooms}` }, { Ad_Type: `${ad_type}` }] });

    // var filters = { Bedrooms: `${rooms}`, Ad_Type: `${ad_type}` };
    // var query = { ...filters };
    const result = await PropListings.find(query);

    res.json(result);
  } catch (err) {
    console.log(`Error while filtering the listings ${err} `);
  }
};

export { postListings, getListings, filterListings, getLimitedListings, searchListings };

//ad type=sale, rent
// unit type= apartment, villa , retail,office, penthouse, hotel apartment
//  tenanated = 0,1,2
// furnished = 1,2,3

//primary view= lots : LT & Jumeirah Heights
//lake
// Partial Fountain"
// Marina View"
// Full Sea View
// "Community view"
// Green Path"
// "Partial Sea View"

//property title
//property name
// listings agent
//bedrooms
//price
//no of bathrooms
// parking

// facilities:{
//          "Balcony",
//         "Basement parking",
//         "Broadband ready",
//         "Built in wardrobes",
//         "Central air conditioning",
//         "Central heating",
//         "Community View",
//         "Covered parking",
//         "Fully fitted kitchen",
//         "Intercom",
//         "Marble floors",
//         "On high floor",
//         "Sauna",
//         "Shared swimming pool",
//         "Children's play area",
//         "Fitness Center",
//         "Public park",
//         "Public parking",
//         "Restaurants",
//         "Shops"
// }
//yes
//no
//yes
