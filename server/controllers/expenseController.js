import { parse } from "dotenv";
import Expense from "../models/Expense.js";

export const addExpense = async (req, res) => {
  const { icon, category, amount, date } = req.body;
  try {
    const expense = await Expense.create({icon,category,amount:parseFloat(amount), date});
    res.status(200).json({
        _id:expense._id,
        category:expense.category,
        amount:expense.amount,
        date:new Date(expense.date),
        icon:expense.icon
    })   
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};

//
export const getExpenses = async (req, res) => {
  
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
//
export const updateExpense = async (req, res) => {
  const { icon, category, amount, date } = req.body;
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
