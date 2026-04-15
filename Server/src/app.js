const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Base Route
app.get('/', (req, res) => {
    res.send('SourceXCloud API is running...');
});

// We export 'app' so Server.js can use it
module.exports = app;