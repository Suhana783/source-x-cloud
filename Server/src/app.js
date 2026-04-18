const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/public/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/public/courses', require('./routes/public/courses.routes'));
app.use('/api/public/services', require('./routes/public/services.routes'));

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'SourceXCloud API is running...',
    });
});

// 404 handler
app.use((req, res, next) => {
    const error = new Error(`Route not found - ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
});

// Global error handler
app.use(errorHandler);

module.exports = app;