const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title:{
        type : String
    },
    message:{
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    isRead:{
        type : Boolean,
        default : false
    }
},

{
    timestamps : true
});

module.exports = mongoose.model("Notification",notificationSchema);