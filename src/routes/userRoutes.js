import express from 'express';
const router = express.Router();

// Example protected route
router.get('/profile', (req, res) => {
    res.json({
        success: true,
        message: 'User profile route placeholder',
        user: req.user,
    });
});

export default router;
