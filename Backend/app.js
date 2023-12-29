const express = require('express');

//Importing Route Module
const dataRouter = require('./Routes/dataRouter');

const app = express();

// Importing cors 
const cors = require('cors');
// Use cors middleware to handle CORS headers
app.use(cors({ origin: '*' }));

app.use(express.json());



//Routes Configuration
app.use('/api/v1/addData', dataRouter);

module.exports = app;