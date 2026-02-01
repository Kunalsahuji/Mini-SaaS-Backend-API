import jwt from 'jsonwebtoken';

export const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role, plan: user.plan },
        process.env.JWT_SECRET,
        { expiresIn: '15m' } // short-lived access token
    );
};

export const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' } // longer-lived refresh token
    );
};

export const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};
