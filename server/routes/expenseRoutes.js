import express from "express";


import { addExpense, deleteExpense, getExpense, getExpenses, updateExpense } from "../controllers/expenseController.js";
import { protect } from "../middleware/authMiddleware.js";
const router =express.Router()

router.post('/',protect, addExpense);
router.get('/:id',protect, getExpense);
router.get('/',protect, getExpenses);
router.delete('/:id',protect, deleteExpense);
router.put('/:id',protect, updateExpense);

export default router;