import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import app from './src/app.js';
import connectDB from './src/config/db.js';
import logger from './src/utils/logger.js';
const PORT = process.env.PORT || 3000;
const server = http.createServer(app)
connectDB();

server.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})
