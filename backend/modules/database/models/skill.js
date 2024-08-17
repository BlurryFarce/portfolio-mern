const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    languages: {
        type: [String],
        required: true,
    },
    frameworksandlibraries: {
        type: [String],
        required: true,
    },
    databasesandcloud: {
        type: [String],
        required: true,
    },
    testing: {
        type: [String],
        required: true,
    },
    tools: {
        type: [String],
        required: true,
    }
});

module.exports = mongoose.model('Skill', skillsSchema);
