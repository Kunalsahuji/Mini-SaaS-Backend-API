import User from "../../user/models/User.js";

export const getAllUsersService = async () => {
    const users = await User.find().select("-password");

    return users;
};


export const updateUserService = async (userId, updateData, currentAdminId) => {
    const { name, email, plan, role } = updateData;

    const user = await User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }

    // Prevent admin from changing their own role
    if (currentAdminId === user._id.toString() && role && role !== user.role) {
        throw new Error("You cannot change your own role");
    }

    // Duplicate email check
    if (email) {
        const existingUser = await User.findOne({ email });
        if (
            existingUser &&
            existingUser._id.toString() !== user._id.toString()
        ) {
            throw new Error("Email already in use");
        }
    }

    // Update only provided fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (plan) user.plan = plan;
    if (role) user.role = role;

    await user.save();

    return user;
};


export const deleteUserService = async (userId, currentAdminId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    // Prevent self deletion
    if (currentAdminId === user._id.toString()) {
        throw new Error("You cannot delete your own account");
    }

    await user.deleteOne();

    return true;
};
