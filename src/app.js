import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.js';
import { rateLimiter } from './middlewares/rateLimitMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import adminRoutes from './routes/adminRoutes.js'
import { protect } from './middlewares/authMiddleware.js';
import { authRoles } from "./middlewares/roleMiddleware.js";

const app = express()

//Middlewares
app.use(express.json());
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', protect, rateLimiter, userRoutes);
app.use('/api/subscriptions', protect, subscriptionRoutes);
app.use('/api/admin', protect, authRoles("admin"), adminRoutes)

// test api for hello world 
app.get('/api/hello', (req, res) => {
    {
        res.status(200).json({ message: 'Hello, World Ji!' });
    }
});
//Error Middleware
app.use(errorHandler);
export default app;