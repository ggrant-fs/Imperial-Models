const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT  = 5000;

//dot env


// mongoose connect 


app.listen(PORT,()=>{
    console.log(`Sever is listening on port ${PORT}`)
})