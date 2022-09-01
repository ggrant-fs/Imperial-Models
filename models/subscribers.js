const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    
    firstName:{
        type: String,
       requied:[true,'Schema validation error, each subscription requires a first name, please check models/subscribers.js']
    },

    lastName:{
        type: String,
       required:[true,'Schema validation error, each subscription requires a last name, please check models/subscribers.js']
    },
    email:{
        type: String,
       required:[true,'Schema validation error, each subscription requires an email, please check models/subscribers.js']
     }
},{timestamp:true});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;