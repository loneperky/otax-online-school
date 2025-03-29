import express from 'express'
import mongoose, { Schema } from 'mongoose'

const UserSchema = new mongoose.Schema({
  fullname:{type: String,required: true,unique:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true}
})

const UserModel = mongoose.model("User",UserSchema)

export {UserModel as User}