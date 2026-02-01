import express from "express";
import { changePlan } from "../modules/subscription/controllers/subscriptionController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.put('/change', protect, changePlan)
export default router;