// const mongoose = require('mongoose');
//we use dotenv to configure envierment 
//variables
const dotenv = require('dotenv');
//dotenv.config({path:"./config.env"})
//is the path that connects server.js
//and .config.env and the enviorment variables
//inside.
dotenv.config({path:"./config.env"});
//if the enviorment variable PORT is not
//available then use port 5000
const PORT  = process.env.PORT || 5000;
// the process.env.DATABASE is an enviorment 
//variable that is located in the .config file
//and holds our mongodb connection database string
// const db = process.env.DATABASE 
const app = require('./app');


// mongoose connect 
// mongoose.connect(db,{
//     useNewUrlParser:true, 
//     useCreateIndex:true, 
//     useFindAndModify:false 
// }).then(()=> console.log('Mongo DB connection was successful'))

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

