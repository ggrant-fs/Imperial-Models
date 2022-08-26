//require express to use middleware & create express methods
//require morgan for logging
const express = require('express');
const morgan = require('morgan');

const app = express();
//import routes from routes folders


//middleware


module.exports = app; // allows for use to use middlewere in other files