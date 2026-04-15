const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/public/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/public/courses', require('./routes/public/courses.routes'));
app.use(errorHandler);

module.exports = app;