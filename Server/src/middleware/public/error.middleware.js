const errorHandler = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    if (err.name === 'CastError') {
        message = `Resource not found with id of ${err.value}`;
        statusCode = 404;
    }

    if (err.name === 'ValidationError') {
        message = Object.values(err.errors).map(val => val.message).join(',');
        statusCode = 400;
    }

    res.status(statusCode).json({
        success: false,
        message: message,

        stack: process.env.NODE_ENV === 'development' ? err.stack : null   
    });
};

module.exports = errorHandler;