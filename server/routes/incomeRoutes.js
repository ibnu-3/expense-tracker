import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addIncome, deleteIncome, getIncome, getIncomes, updateIncome } from "../controllers/incomeController.js";
const router = express.Router();

router.post("/", protect, addIncome);
router.get("/:id", protect, getIncome);
router.get("/", protect, getIncomes);
router.delete("/:id", protect, deleteIncome);
router.put("/:id", protect, updateIncome);

export default router;
