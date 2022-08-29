const express = require('express');
const morgan = require('morgan');

const app = express();
//import routes from routes folders


// if(process.env.NODE_ENV === 'development'){
//     app.use(morgan('dev'));
// }

//middleware
app.use(express.json());
app.use(express.static(`${__dirname}/client/public`));


app.use('/api/v1/models');
app.use('/api/v1/models/:id');
app.use('/api/v1/models/male-models');
app.use('/api/v1/models/female-models');
app.use('/api/v1/blogpost');
app.use('/api/v1/blogpost/:id');
app.use('/api/v1/subscribe');

module.exports = app; // allows for use to use middlewere in other files