import { isValidObjectId } from "mongoose";
import Income from "../models/Income.js";
import Expense from "../models/Expense.js";
export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;
    const userObjectId = new Types.ObjectId(String(userId));
    //fetch total income & expense
    const totalIncome = await Income.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    console.log("totalIncome", {
      totalIncome,
      userId: isValidObjectId(userId),
    });

    const totalExpense = await Expense.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    //get income transaction int he last 60 days
    const last60DaysIncomeTransactions = await Income.find({
      userId,
      date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
    }).sort({date:-1});

    //total income in the last 60 days
    const incomeLast60Days = last60DaysIncomeTransactions.reduce((sum,transaction)=> sum + transaction.amount, 0);

    //get expense transaction in the last 30 days
    const last30DaysExpenseTransactions = await Expense.find({userId, date:{$gte: new Date(Date.now()- 30 * 24 * 60 * 60 * 1000)}}).sort({date:-1});

    //total expense in the last 30 days
    const expenseLast30Days = last30DaysExpenseTransactions.reduce((sum, transaction)=> sum + transaction.amount, 0)
  } catch (error) {}
};
