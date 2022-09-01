const mongoose = require('mongoose');

const modelsSchema = new mongoose.Schema({
    image:{
        type:String,
        required:[true,'Every Model must have an image']
    },
    firstName:{
        type:String,
        required:[true,'Every model must have a first name ']
    },
    lastName:{
        type:String,
        required:[true,'Every model must have a last name']
    },
    gender:{
        type:String,
        required:[true,'Every model should have a gender']
    },
    
 },{timestamps:true});

const Model = mongoose.model('Model',modelsSchema);

module.exports = Model;