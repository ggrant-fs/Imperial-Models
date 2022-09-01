const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoutes');
const modelRouter = require('./routes/modelRoutes')

const app = express();
//import routes from routes folders


// if(process.env.NODE_ENV === 'development'){
//     app.use(morgan('dev'));
// }

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/client/public`));


app.use('/api/v1/models',modelRouter);
app.use('/api/v1/models/:id',modelRouter);
app.use('/api/v1/models/male-models',modelRouter);
app.use('/api/v1/models/female-models',modelRouter);

app.use('/api/v1/blogpost',blogRouter);

module.exports = app; 