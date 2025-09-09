import express from "express";
import { getUsers, loginUser, registerUser, userInfo } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router =express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/profile',protect, userInfo)
router.get('/all',protect, getUsers)

export default router;