const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const ContactSchema = new Schema({
    contact_name: {
        type: String,
        required: true
    },
    contact_phone: {
        type: String,
        required: true
    },
    contact_email: {
        type: String,
        required: true
    },
    contact_skype: {
        type: String,
        required: true
    },
    contact_image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Contact = mongoose.model('contact', ContactSchema);