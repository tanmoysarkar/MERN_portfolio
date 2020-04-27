const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const ResumeSchema = new Schema({
    resume_user_name: {
        type: String,
        required: true
    },
    resume_about: {
        type: String,
        required: true
    },
    resume_contact_number: {
        type: String,
        required: true
    },
    resume_address: {
        type: String,
        required: true
    },
    resume_email: {
        type: String,
        required: true
    },
    resume_image_link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Resume = mongoose.model('resume', ResumeSchema);