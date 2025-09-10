import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    source:{type:String, required:true},
    date:{type:Date, required:true},
    amount:{type:Number, required:true, default:0},
    icon:{type:String,default:'AiFillPayCircle'}},
{timestamps:true})
const Income =mongoose.model('Income', incomeSchema)
export default Income