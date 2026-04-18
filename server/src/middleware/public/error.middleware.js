const errorHandler = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    // Invalid MongoDB ObjectId
    if (err.name === 'CastError') {
        message = `Resource not found with id of ${err.value}`;
        statusCode = 404;
    }

    // Mongoose Validation Error
    if (err.name === 'ValidationError') {
        message = Object.values(err.errors).map(val => val.message).join(',');
        statusCode = 400;
    }

    // Duplicate Key Error (important)
    if (err.code === 11000) {
    message = 'Duplicate field value entered';
    statusCode = 400;
    }


    res.status(statusCode).json({
        success: false,
        message: message,

        stack: process.env.NODE_ENV === 'development' ? err.stack : null   
    });
};

module.exports = errorHandler;