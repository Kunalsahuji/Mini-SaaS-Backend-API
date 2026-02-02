import User from '../../user/models/User.js';
import { AppError } from "../../../middlewares/errorHandler.js";

export const upgradePlan = async (userId, newPlan) => {
    const validPlans = ['free', 'pro']
    if (!validPlans.includes(newPlan)) {
        throw new AppError('Invalid plan selected', 400);
    }
    const user = await User.findById(userId);
    if (!user) {
        throw new AppError('User not found', 404);
    }
    user.plan = newPlan;
    await user.save();
    return user;
}