import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import{ UserRouter} from '../routes/user.js';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config()

app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use("/auth",UserRouter)
//mongodb://localhost:27017/
mongoose.connect("mongodb://localhost:27017/otax-software")


app.listen(process.env.PORT,()=>{
  console.log("Server is running at PORT 9000")
})