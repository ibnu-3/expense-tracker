import express from "express";
//import { getUsers, loginUser, registerUser, userInfo } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getDashboardData } from "../controllers/dashboardController.js";
const router =express.Router()

router.get('/',protect, getDashboardData)


export default router;