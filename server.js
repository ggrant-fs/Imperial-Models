const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
const PORT  = process.env.PORT || 5000;
const app = require('./app');


// mongoose connect 
mongoose.connect("mongodb+srv://imperial-models:078ltUsgrqsbuaDn@imperial-models.nie9vb7.mongodb.net/?retryWrites=true&w=majority"
).then(()=> console.log("DB connection was successful"));

app.listen(PORT,()=>{
    console.log(`Sever is listening on port ${PORT}`)
})