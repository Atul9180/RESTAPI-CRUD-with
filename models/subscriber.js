const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subscribedToChannel:{
        type:String,
        required:true
    },
    subscribeDate:{
        type:String,
        required:true,
        default:Date.now
    }
})

//uses model name and schema
module.exports =mongoose.model('Subscriber',subscriberSchema)