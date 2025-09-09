import { parse } from "dotenv";
import Expense from "../models/Expense.js";

export const addExpense = async (req, res) => {
  const { icon, category, amount, date } = req.body;
  try {
    const expense = await Expense.create({
      icon,
      category,
      amount: parseFloat(amount),
      date,
    });
    res.status(200).json({message:"Expense created Successfully",expense});
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};

//get all
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({}).sort({ createdAt: -1 });
    if (!expenses) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(201).json( expenses);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
//get one
export const getExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
//
export const updateExpense = async (req, res) => {
  const { icon, category, amount, date } = req.body;
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    expense.icon= icon || expense.icon;
    expense.category= category || expense.category;
    expense.amount= amount || expense.amount;
    expense.date= date || expense.amount;
    const newExpense = await expense.save()
    return res.status(201).json({message:'Expense Updated!',newExpense})
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};

//delete expense
//get one
export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    await expense.deleteOne()
    res.status(201).json({message:"Expense deleted!"});
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
