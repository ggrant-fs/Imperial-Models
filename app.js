const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoutes');
const modelRouter = require('./routes/modelRoutes')

const app = express();


app.use(morgan("dev"));
app.use(express.json());

if(process.env.NODE_ENV==='production'){
   app.use(express.static(`${__dirname}/client/build`));

   app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
   })
}


app.use('/api/v1/models',modelRouter);
app.use('/api/v1/blogpost',blogRouter);

//error handler
app.all('*',(req,res,next)=>{
   return  next(`an error occured the submitted url is not valid:${req.originalUrl}`)
})


module.exports = app; 