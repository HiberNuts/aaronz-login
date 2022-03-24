//importing
import dotenv from "dotenv";
import express from "express";
import connectDB from "./dbConnect.js";
import cors from "cors";
import { errorHandler, notFound } from "./MiddleWares/errorMiddleware.js";
import router from "./routes/userRoute.js";
import jwt from "jsonwebtoken";
import { User } from "./models/userModel.js";
import buyRouter from "./routes/buyerRoute.js";

import mongoose from "mongoose";
import listingsRouter from "./routes/listingsRoute.js";

//constants
const app = express();
const PORT = process.env.PORT || 3001;
// defining function to get token out of header
const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

app.use(cors());
dotenv.config();
//connecting to mongodb
connectDB();

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/listings", async (req, res) => {
  try {
    const collection = await mongoose.connection.db.collections();

    res.json(collection[2]);
  } catch (err) {
    console.log(`error in getiing lsitings ${err}`);
  }
});

// ogin validator
app.post("/verify", async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: true, message: "Invalid Token" });
    }

    const user = await User.findById(decodedToken.id);
    res.json(user);
  } catch (err) {
    res.send(err);
  }
});

app.use("/user", router);
app.use("/buyReq", buyRouter);
app.use("/", listingsRouter);

//error middleware always should be in last
app.use(notFound);
app.use(errorHandler);

//caalling
app.listen(PORT, () => {
  console.log("server running at port http://localhost:3001");
});
