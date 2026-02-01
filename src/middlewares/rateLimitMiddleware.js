import rateLimit from 'express-rate-limit';

export const rateLimiter = (req, res, next) => {
    const userPlan = req.user?.plan || 'free';

    let maxRequests;
    if (userPlan === 'pro') {
        maxRequests = 100; // Pro users: 100 requests per minute
    } else {
        maxRequests = 20;  // Free users: 20 requests per minute
    }

    const limiter = rateLimit({
        windowMs: 60 * 1000, // 1 minute
        max: maxRequests,
        message: {
            success: false,
            message: `Rate limit exceeded for ${userPlan} plan`,
        },
        standardHeaders: true,
        legacyHeaders: false,
    });

    return limiter(req, res, next);
};
