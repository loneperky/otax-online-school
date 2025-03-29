import express from "express";
import bcryptjs from "bcryptjs";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, fullname, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    return res.json({ message: "User already registered" });
  }

  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = new User({
    fullname,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return res.json({ status: true, message: "user registered successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    return res.json({ message: "user record not found" });
  }
  const isValid = await bcryptjs.compare(password, checkUser.password);
  if (!isValid) {
    return res.json({ message: "user password incorrect" });
  }
  const token = await jwt.sign({ email: checkUser.email }, process.env.JWT_KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
  return res.json({ status: true, message: "login successful" });
});

router.post("/forgot-password",(req,res)=>{

})

router.post("/logout",(req,res)=>{
  res.clearCookie('Token')
})

export { router as UserRouter };
