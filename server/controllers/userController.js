import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, "jwt", { expiresIn: "7d" });
};
export const registerUser = async (req, res) => {
  const { name, email, image, password } = req.body;
  try {
    const existingUser = await User.find({ email });
    if (existingUser) {
      res.status(403).json({ message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      image,
      password: hashedPassword,
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
//login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};

//get user info
export const userInfo =async (req,res) => {
    try {
        const user= await User.findById(req.user._id).select('-password')
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        res.status(404).json(user)
    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
    }
}

//ge users
export const getUsers =async (req,res) => {
    try {
        const users= await User.find({}).select('-password')
        if(!users){
            return res.status(404).json({message:"users not found"})
        }
        res.status(404).json(users)
    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
    }
}
