const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const SkillSchema = new Schema({
    skill_name: {
        type: String,
        required: true
    },
    skill_progress: {
        type: String,
        required: true
    },
    skill_buffer: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Skill = mongoose.model('skill', SkillSchema);