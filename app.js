const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoutes');
const modelRouter = require('./routes/modelRoutes')

const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/client/public`));


app.use('/api/v1/models',modelRouter);
app.use('/api/v1/blogpost',blogRouter);

//error handler
app.all('*',(req,res,next)=>{
   return  next(`an error occured the submitted url is not valid:${req.originalUrl}`)
})

app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})


module.exports = app; 