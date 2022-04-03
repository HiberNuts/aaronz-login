// used for all funtion that route need to peerform
import bcrypt from "bcryptjs";
import generateToken from "../generateToken.js";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

//constant function
const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

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
    const { email, password, number, isAdmin, name } = req.body;

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

const verifyUser = async () => {
  try {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: true, message: "Invalid Token" });
    }

    const user = await User.findById(decodedToken.id);
    res.json(user);
  } catch (err) {
    res.send(`Error while verifying user ${err}`);
  }
};

const getUser = async (req, res) => {
  const user = await User.find({}).populate("buyer");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

const getUserbyId = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).populate("buyer");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

const getUserRequest = async (req, res) => {
  const data = await User.find({});
  res.json(data);
};

export { registerUser, getUser, loginUser, getUserRequest, getUserbyId, verifyUser };
