const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[true,'Each subscription must include an email']
     },
     timestamp:true
});

const Subscriber = mongoose.mondel('Subscriber', subscriberSchema);

module.export = Subscriber;