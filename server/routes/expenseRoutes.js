import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { addExpense } from "../controllers/expenseController.js";
const router =express.Router()

router.post('/',protect, addExpense)


export default router;