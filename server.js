const mongoose = require('mongoose');
const path = require('node:path');
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
const PORT  = process.env.PORT || 5000;
// const db = process.env.DATABASE

const app = require('./app');

if(process.env.NODE_ENV==='production'){
    app.use(express.static(`./client/build`));
 
    app.get('*',(req,res)=>{
       res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
 }
 

// mongoose.connect(db,{
//     useNewUrlParser:true, 
//     useCreateIndex:true, 
//     useFindAndModify:false 
// }).then(()=> console.log('Mongo DB connection was successful'))

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

