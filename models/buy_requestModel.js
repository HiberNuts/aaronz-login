// import mongoose from "mongoose";

// import User from "./userModel.js";

// const buyerSchema = mongoose.Schema(
//    {
//       budget: {
//          type: Number,
//          required: true,
//       },
//       propertyName: {
//          type: String,
//       },
//       negotiable: {
//          type: Boolean,
//       },
//       locality: {
//          type: String,
//          required: true,
//       },
//       floor: {
//          type: Number | String,
//       },
//       modeOfPayment: {
//          type: String,
//       },
//       TypeOfBuyer: {
//          type: String,
//       },
//       moveInTime: {
//          type: String,
//       },
//       numOfBedRoom: {
//          type: Number,
//       },
//       maid: {
//          type: Boolean,
//       },
//       view: {
//          type: String,
//       },
//       others: {
//          type: String,
//       },
//       user: [
//          {
//             type: mongoose.Schema.Types.ObjectId,
//             ref:User,
//          },
//       ],
//    },
//    {
//       timestamps: true,
//    }
// );

// const buyer = mongoose.model("Buyer", buyerSchema);

// buyerSchema.set("toJSON", {
//    transform: (document, returnedObject) => {
//       returnedObject.id = returnedObject._id.toString();
//       delete returnedObject.__v;
//       delete returnedObject.password;
//       // the passwordHash should not be revealed
//    },
// });

// export default buyer;
