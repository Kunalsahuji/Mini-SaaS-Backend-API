import { asyncHandler } from "../../../middlewares/asynHandler.js";
import User from "../../user/models/User.js";
import {
    getAllUsersService,
    updateUserService,
    deleteUserService
} from "../services/adminService.js";


export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await getAllUsersService();
    const user = await User.find().select("-password");
    res.status(200).json({
        success: true,
        count: user.length,
        data: users.map(u => ({
            id: u._id,
            name: u.name,
            email: u.email,
            role: u.role,
            plan: u.plan
        }))
    });
});

export const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await updateUserService(
        req.params.id,
        req.body,
        req.user._id.toString()
    );

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: {
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            plan: updatedUser.plan
        }
    });
});


export const deleteUser = asyncHandler(async (req, res) => {
    await deleteUserService(
        req.params.id,
        req.user._id.toString()
    );

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
});
