const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const EducationSchema = new Schema({
    institute_name: {
        type: String,
        required: true
    },
    stream_branch: {
        type: String,
        required: true
    },
    education_start_date: {
        type: Date,
        required: true
    },
    education_end_date: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Education = mongoose.model('education', EducationSchema);