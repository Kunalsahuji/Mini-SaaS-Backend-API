import { generateAccessToken, generateRefreshToken } from "../../../config/jwt.js";
import { asyncHandler } from "../../../middlewares/asynHandler.js";
import { AppError } from "../../../middlewares/errorHandler.js";
import User from "../../user/models/User.js";


export const registerUser = asyncHandler(async ({ name, email, password }) => {
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new AppError('User already exists', 400);
    }
    const user = await User.create({ name, email, password });
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)
    return { user, accessToken, refreshToken };
})

export const loginUser = asyncHandler(async ({ email, password }) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new AppError('Invalid email or password', 401);
    }
    const isMatch = await User.matchPassword(password)
    if (!isMatch) {
        throw new AppError('Invalid email or password', 401);
    }
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)
    return { user, accessToken, refreshToken };
}
)