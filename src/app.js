import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.js';

import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import subscriptionRoutes from './routes/subscriptionRoutes.js';

const app = express()

//Middlewares
app.use(express.json());
app.use(cors())
app.use(helmet())  
app.use(morgan('dev'))

//Routes
// app.use('api/v1/users', userRoutes);
// app.use('api/v1/auth', authRoutes);
// app.use('api/v1/subscriptions', subscriptionRoutes);

//Error Middleware
app.use(errorHandler);
export default app;