const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    favouriteTutorId: [{ type: Schema.Types.ObjectId }],
    name: { type: String },
});

module.exports = mongoose.model("User", userSchema);