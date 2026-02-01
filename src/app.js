import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.js';
import {rateLimiter} from './middlewares/rateLimitMiddleware.js';
import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import { protect } from './middlewares/authMiddleware.js';

const app = express()

//Middlewares
app.use(express.json());
app.use(cors())
app.use(helmet())  
app.use(morgan('dev'))

//Routes
// apply rate limiter globally (or per router)
app.use('/api/v1/', protect, rateLimiter);
// app.use('api/v1/users', userRoutes);
app.use('api/v1/auth', authRoutes);
app.use('api/v1/subscriptions', subscriptionRoutes);

//Error Middleware
app.use(errorHandler);
export default app;