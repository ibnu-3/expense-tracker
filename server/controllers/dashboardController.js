import {isValidObjectId} from 'mongoose'
import Income from '../models/Income.js';
import Expense from '../models/Expense.js';
export const getDashboardData = async (req,res) => {
    try {
        const userId =req.user.id;
        const userObjectId = new Types.ObjectId(String(userId));
        //fetch total income & expense
        const totalIncome = await Income.aggregate([
            {$match: {userId: userObjectId}},
            {$group: {_id:null, total: { $sum: "$amount"}}},
        ]);
        console.log("totalIncome", {totalIncome, userId: isValidObjectId(userId)})

        const totalExpense = await Expense.aggregate
    } catch (error) {
        
    }
}