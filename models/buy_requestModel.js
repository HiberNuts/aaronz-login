import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const buyerSchema = mongoose.Schema({
   budget: {
      type: Number,
      required: true,   
   },
   negotiable: {
      type: Boolean,
   },
   locality: {
      type: String,
      required: true,
   },
   floor: {
      type: Number | String,
   },
   modeOfPayment: {
      type: String,
   },
   TypeOfBuyer: {
      type: String,
   },
   moveInTime: {
      type: String,
   },
   numOfBedRoom: {
      type: number,
   },
   maid: {
      type: boolean,
   },
   view: {
      type: String,
   },
   others: {
      type: String,
   },
});

const buyer = mongoose.model("buyer", buyerSchema);

export default buyer;
