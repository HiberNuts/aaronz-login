// used for all funtion that route need to peerform
import bcrypt from "bcryptjs";
import generateToken from "../generateToken.js";
import User from "../models/userModel.js";

const loginUser = async (req, res) => {
   const { email, password } = req.body.user;

   const user = await User.findOne({ email });

   const correctPass = user === null ? false : await bcrypt.compare(password, user.password);

   if (!user || correctPass == false) {
      res.status(400);
      console.log("Invalid Email or password");
      res.json({ message: "Invalid Email or password" });
   }
   if (user && correctPass) {
      res.json({
         _id: user._id,
         name: user.name,
         password: user.password,
         email: user.email,
         number: user.number,
         isAdmin: user.isAdmin,
         token: generateToken(user._id),
      });
   }
};

const registerUser = async (req, res) => {
   try {
      const saltRounds = 10;
      const { email, password, number, isAdmin, name } = req.body.user;

      if (email.replace(/\s+/g, " ").trim() != "") {
         const hashPassword = await bcrypt.hash(password, saltRounds);

         const userExists = await User.findOne({ email });

         if (userExists) {
            res.status(400);
            console.log("user already exists");
            res.json({ message: "user already exists" });

            throw new Error("User already exists");
         }

         const user = await User.create({
            name: name,
            email: email,
            password: hashPassword,
            number: number,
            isAdmin: isAdmin,
         });

         if (user) {
            res.status(201).json({
               id: user._id,
               name: user.name,
               email: user.email,
               number: user.number,
               isAdmin: user.isAdmin,
               token: generateToken(user._id),
            });
         }
      } else {
         res.json({ message: "enter valid name" });
      }
   } catch (err) {
      console.log(`Inside userController - ERROR : ${err} `);
   }
};

const getUser = async (req, res) => {
   const user = await User.find({});

   if (user) {
      res.json(user);
   } else {
      res.status(404);
      throw new Error("User not found");
   }
};

export { registerUser, getUser, loginUser };
