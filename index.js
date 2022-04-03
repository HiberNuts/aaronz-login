//importing
import dotenv from "dotenv";
import express from "express";
import connectDB from "./dbConnect.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import { notFoundMiddleware, loginErrorMiddleware } from "./MiddleWares/errorMiddleware.js";
import errorHandler from "errorhandler";

//file imports
import userRouter from "./routes/userRoute.js";
import buyRouter from "./routes/buyerRoute.js";
import listingsRouter from "./routes/listingsRoute.js";

//constants
const app = express();
const PORT = process.env.PORT || 3001;

//additional functions
app.use(express.json());
app.use(cors());
dotenv.config();

//connecting to mongodb
connectDB();

//routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/user", userRouter);
app.use("/buyReq", buyRouter);
app.use("/listings", listingsRouter);

//error middleware always should be in last
app.use(loginErrorMiddleware);
app.use(notFoundMiddleware);
app.use(errorHandler);

//caalling
app.listen(PORT, () => {
  console.log("server running at port http://localhost:3001");
});
