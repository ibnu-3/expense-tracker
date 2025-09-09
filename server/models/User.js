import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,unique:true, required:true},
    password:{type:String, required:true},
    image:{type:String,default:'https://images.unsplash.com/photo-1755397271926-3681d11c16e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'}},
{timestamps:true})
const User =mongoose.model('User', userSchema)
export default User