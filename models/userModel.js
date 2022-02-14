// for schemas
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      isAdmin: {
         type: Boolean,
         default: false,
      },
      number: {
         type: Number,
         required: true,
      },
      buyer: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Buyer",
         },
      ],
   },
   {
      timestamps: true,
   }
);

const buyerSchema = new mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },
      budget: {
         type: Number,
         required: true,
      },
      propertyName: {
         type: String,
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
         type: Number,
      },
      maid: {
         type: Boolean,
      },
      view: {
         type: String,
      },
      others: {
         type: String,
      },
   },
   {
      timestamps: true,
   }
);

const User = mongoose.model("User", userSchema);
const Buyer = mongoose.model("Buyer", buyerSchema);

export { User, Buyer };
