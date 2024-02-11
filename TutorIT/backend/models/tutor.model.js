const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorSchema = new Schema({

    name: { type: String },
    about: { type: String },
    image: { type: String },
    courses: [{
        courseId: { type: String },
        courseName: { type: String },
    }],
    rating: { type: String },
    email: { type: String }

});

module.exports = mongoose.model("Tutor", tutorSchema);