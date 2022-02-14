import { Buyer, User } from "../models/userModel.js";

const buyRequest = async (req, res) => {
   try {
      const {
         userId,
         budget,
         propertyName,
         negotiable,
         locality,
         floor,
         modeOfPayment,
         TypeOfBuyer,
         moveInTime,
         numOfBedRoom,
         maid,
         view,

         others,
      } = req.body;

      const user = await User.findById(userId);

      const buyer = new Buyer({
         user: user._id,
         budget: budget,
         propertyName: propertyName,
         negotiable: negotiable,
         locality: locality,
         floor: floor,
         modeOfPayment: modeOfPayment,
         TypeOfBuyer: TypeOfBuyer,
         moveInTime: moveInTime,
         numOfBedRoom: numOfBedRoom,
         maid: maid,
         view: view,
         others: others,
      });

      const savedRequest = await buyer.save();

      // if (savedRequest) {
      //    res.json({
      //       user: request.user,
      //       budget: request.budget,
      //       propertyName: request.propertyName,
      //       negotiable: request.negotiable,
      //       locality: request.locality,
      //       floor: request.floor,
      //       modeOfPayment: request.modeOfPayment,
      //       TypeOfBuyer: request.TypeOfBuyer,
      //       moveInTime: request.moveInTime,
      //       numOfBedRoom: request.numOfBedRoom,
      //       maid: request.maid,
      //       view: request.view,
      //       others: request.others,
      //    });
      // } else {
      //    res.json({ message: "enter valid inputs" });
      // }

      user.buyer = user.buyer.concat(savedRequest._id);
      await user.save();

      res.json(savedRequest);
   } catch (err) {
      console.log("inside Buyer controller - " + err);
      res.json({ error: err });
   }
};

const getBuyRequest = async (req, res) => {
   try {
      const result = await Buyer.find({}).populate("user");
      res.json(result);
   } catch (err) {
      console.log(err);

      res.json({ err });
   }
};

const getRequestByUserId = async (req, res) => {
   const id = req.params.id;
   const request = await User.findById(id).populate("buyer");

   if (request) {
      res.json(request.buyer);
   } else {
      res.status(404);
      console.log("user not found");
   }
};

export { buyRequest, getBuyRequest, getRequestByUserId };
