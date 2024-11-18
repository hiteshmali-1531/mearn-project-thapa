const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    username:{type: String, require: true},
    email : {type : String, require: true},
    message: {type : String, require: true}
});

// create a model of a collection

const Contact = new mongoose.model('Contact', contactSchema);

module.exports = Contact;