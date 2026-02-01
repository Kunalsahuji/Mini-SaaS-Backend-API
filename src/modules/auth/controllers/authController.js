import { asyncHandler } from "../../../middlewares/asynHandler.js";
import { loginUser, refreshAccessToken, registerUser } from "../services/authService.js";


export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const { user, accessToken, refreshToken } = await registerUser({ name, email, password });

    res.status(201).json({
        success: true,
        data: {
            user: { id: user._id, name: user.name, email: user.email, role: user.role, plan: user.plan },
            accessToken,
            refreshToken,
        },
    });
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const { user, accessToken, refreshToken } = await loginUser({ email, password });

    res.status(200).json({
        success: true,
        data: {
            user: { id: user._id, name: user.name, email: user.email, role: user.role, plan: user.plan },
            accessToken,
            refreshToken,
        },
    });
});

export const refreshToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;
    const { newAccessToken } = await refreshAccessToken(refreshToken);
    res.status(200).json({
        success: true,
        data: {
            accessToken: newAccessToken,
        },
    });
});