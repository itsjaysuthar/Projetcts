const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    userId: { type: String},
    tutorId: { type:String },
    rating: { type: Number },
    comment: { type: String },
});

module.exports = mongoose.model("feedback", feedbackSchema);