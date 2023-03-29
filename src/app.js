const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

//Determine if this should be removed
const bodyParser = require('body-parser');



//.env file implementation
require('dotenv').config();

//Import Routes
const customerRoute = require('./routes/customer');

//This is the express app
const app = express();


//This is a middleware that allows cross origin requests
app.use(cors({
    origin: 'http://localhost:3000'
}));

//If there is an error this should be removed
app.use(bodyParser.json());

//This is a middleware that logs the request
app.use(morgan('combined'));

//This is a middleware that sets security headers
app.use(helmet());


//This is a middleware that parses the request body
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


//Route Middleware
app.use('/api/v1', customerRoute);


//This was done when dealing with react that was built in the server
app.get('/*', (req, res) => { 
    //res.json({message: "Hello World"});
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;