import { asyncHandler } from '../../../middlewares/asynHandler.js';
import { upgradePlan } from '../services/subscriptionService.js';

export const changePlan = asyncHandler(async (req, res) => {
    const { plan } = req.body;
    const userId = req.user._id;

    const updatedUser = await upgradePlan(userId, plan);
    res.status(200).json({
        success: true,
        data: {
            id: updatedUser._id,
            email: updatedUser.email,
            plan: updatedUser.plan,
        },
    });
});
