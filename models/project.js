const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const ProjectSchema = new Schema({
    project_type: {
        type: String,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    project_description: {
        type: String,
        required: true
    },
    project_link: {
        type: String,
        required: true
    },
    project_image_link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);