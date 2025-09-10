import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
     userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    category: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true, default: 0 },
    icon: { type: String, default: "AiFillPayCircle" },
  },
  { timestamps: true }
);
const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
