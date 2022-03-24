import mongoose from "mongoose";

const listingsSchema = new mongoose.Schema({
  count: {
    type: "string",
  },
  Property_Ref_No: {
    type: "string",
  },
  Ad_Type: {
    type: "string",
  },
  Unit_Type: {
    type: "string",
  },
  Tenanted: {
    type: "string",
  },
  Furnished: {
    type: "string",
  },
  Unit_Model: {
    type: "string",
  },
  Primary_View: {
    type: "string",
  },
  Unit_Builtup_Area: {
    type: "string",
  },
  No_of_Bathroom: {
    type: "string",
  },
  Property_Title: {
    type: "string",
  },
  Web_Remarks: {
    type: "string",
  },
  Emirate: {
    type: "string",
  },
  Community: {
    type: "string",
  },
  Property_Name: {
    type: "string",
  },
  Listing_Agent: {
    type: "string",
  },
  Listing_Agent_Phone: {
    type: "string",
  },
  Listing_Agent_Photo: {
    type: "string",
  },
  Listing_Date: {
    type: "string",
  },
  Last_Updated: {
    type: "string",
  },
  Bedrooms: {
    type: "string",
  },
  Listing_Agent_Email: {
    type: "string",
  },
  Price: {
    type: "string",
  },
  Unit_Reference_No: {
    type: "string",
  },
  Exclusive: {
    type: "string",
  },
  No_of_Rooms: {
    type: "string",
  },
  Plot_Size: {
    type: "string",
  },
  Latitude: {
    type: "string",
  },
  Longitude: {
    type: "string",
  },
  unit_measure: {
    type: "string",
  },
  Featured: {
    type: "string",
  },
  "Images/image/0": {
    type: "string",
  },
  "Images/image/1": {
    type: "string",
  },
  "Images/image/2": {
    type: "string",
  },
  "Images/image/3": {
    type: "string",
  },
  "Images/image/4": {
    type: "string",
  },
  "Images/image/5": {
    type: "string",
  },
  "Images/image/6": {
    type: "string",
  },
  "Images/image/7": {
    type: "string",
  },
  "Images/image/8": {
    type: "string",
  },
  "Images/image/9": {
    type: "string",
  },
  "Facilities/facility/0": {
    type: "string",
  },
  "Thumb/0": {
    type: "string",
  },
  "Thumb/1": {
    type: "string",
  },
  "Thumb/2": {
    type: "string",
  },
  "Thumb/3": {
    type: "string",
  },
  "Thumb/4": {
    type: "string",
  },
  "Thumb/5": {
    type: "string",
  },
  "Thumb/6": {
    type: "string",
  },
  "Thumb/7": {
    type: "string",
  },
  "Thumb/8": {
    type: "string",
  },
  "Thumb/9": {
    type: "string",
  },
  company_name: {
    type: "string",
  },
  Parking: {
    type: "string",
  },
  company_logo: {
    type: "string",
  },
  preview_link: {
    type: "string",
  },
  price_on_application: {
    type: "string",
  },
  off_plan: {
    type: "string",
  },
  Cheques: {
    type: "string",
  },
  permit_number: {
    type: "string",
  },
  completion_status: {
    type: "string",
  },
  "Images/image/10": {
    type: "string",
  },
  "Facilities/facility/1": {
    type: "string",
  },
  "Facilities/facility/2": {
    type: "string",
  },
  "Facilities/facility/3": {
    type: "string",
  },
  "Facilities/facility/4": {
    type: "string",
  },
  "Facilities/facility/5": {
    type: "string",
  },
  "Facilities/facility/6": {
    type: "string",
  },
  "Facilities/facility/7": {
    type: "string",
  },
  "Facilities/facility/8": {
    type: "string",
  },
  "Facilities/facility/9": {
    type: "string",
  },
  "Facilities/facility/10": {
    type: "string",
  },
  "Facilities/facility/11": {
    type: "string",
  },
  "Facilities/facility/12": {
    type: "string",
  },
  "Facilities/facility/13": {
    type: "string",
  },
  "Facilities/facility/14": {
    type: "string",
  },
  "Facilities/facility/15": {
    type: "string",
  },
  "Facilities/facility/16": {
    type: "string",
  },
  "Facilities/facility/17": {
    type: "string",
  },
  "Facilities/facility/18": {
    type: "string",
  },
  "Facilities/facility/19": {
    type: "string",
  },
  "Thumb/10": {
    type: "string",
  },
  "Images/image/11": {
    type: "string",
  },
  "Images/image/12": {
    type: "string",
  },
  "Images/image/13": {
    type: "string",
  },
  "Facilities/facility/20": {
    type: "string",
  },
  "Facilities/facility/21": {
    type: "string",
  },
  "Facilities/facility/22": {
    type: "string",
  },
  "Facilities/facility/23": {
    type: "string",
  },
  "Facilities/facility/24": {
    type: "string",
  },
  "Facilities/facility/25": {
    type: "string",
  },
  "Facilities/facility/26": {
    type: "string",
  },
  "Facilities/facility/27": {
    type: "string",
  },
  "Facilities/facility/28": {
    type: "string",
  },
  "Facilities/facility/29": {
    type: "string",
  },
  "Facilities/facility/30": {
    type: "string",
  },
  "Thumb/11": {
    type: "string",
  },
  "Thumb/12": {
    type: "string",
  },
  "Thumb/13": {
    type: "string",
  },
  "Images/image/14": {
    type: "string",
  },
  "Images/image/15": {
    type: "string",
  },
  "Images/image/16": {
    type: "string",
  },
  "Images/image/17": {
    type: "string",
  },
  "Thumb/14": {
    type: "string",
  },
  "Thumb/15": {
    type: "string",
  },
  "Thumb/16": {
    type: "string",
  },
  "Thumb/17": {
    type: "string",
  },
  "Images/image/18": {
    type: "string",
  },
  "Images/image/19": {
    type: "string",
  },
  "Images/image/20": {
    type: "string",
  },
  "Images/image/21": {
    type: "string",
  },
  "Images/image/22": {
    type: "string",
  },
  "Images/image/23": {
    type: "string",
  },
  "Images/image/24": {
    type: "string",
  },
  "Facilities/facility/31": {
    type: "string",
  },
  "Facilities/facility/32": {
    type: "string",
  },
  "Facilities/facility/33": {
    type: "string",
  },
  "Facilities/facility/34": {
    type: "string",
  },
  "Facilities/facility/35": {
    type: "string",
  },
  "Facilities/facility/36": {
    type: "string",
  },
  "Facilities/facility/37": {
    type: "string",
  },
  "Facilities/facility/38": {
    type: "string",
  },
  "Facilities/facility/39": {
    type: "string",
  },
  "Facilities/facility/40": {
    type: "string",
  },
  "Facilities/facility/41": {
    type: "string",
  },
  "Facilities/facility/42": {
    type: "string",
  },
  "Facilities/facility/43": {
    type: "string",
  },
  "Facilities/facility/44": {
    type: "string",
  },
  "Thumb/18": {
    type: "string",
  },
  "Thumb/19": {
    type: "string",
  },
  "Thumb/20": {
    type: "string",
  },
  "Thumb/21": {
    type: "string",
  },
  "Thumb/22": {
    type: "string",
  },
  "Thumb/23": {
    type: "string",
  },
  "Thumb/24": {
    type: "string",
  },
});

const PropListings = mongoose.model("Listings", listingsSchema);
export { PropListings };
