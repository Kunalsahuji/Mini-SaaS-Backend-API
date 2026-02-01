import logger from "../utils/logger.js";


const errorHandler = (err, req, res, next) => {
logger.error(`${err.message} - ${req.method} ${req.url}`);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server Error',
    });
};

export { errorHandler };