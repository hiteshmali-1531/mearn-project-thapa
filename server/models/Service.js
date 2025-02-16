const mongoose = require('mongoose');

const serviceShema = new mongoose.Schema({
    service:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    price:{
        type:String,
        require: true
    },
    provider:{
        type: String,
        require: true
    }
});

const Service = new mongoose.model('Service', serviceShema);

module.exports = Service;