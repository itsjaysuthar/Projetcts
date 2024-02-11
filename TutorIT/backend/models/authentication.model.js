const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authenticationSchema = new Schema({
    email: { type: String },
    name : {type: String},
    password: { type: String },
    role: { type: Number }
});

module.exports = mongoose.model("authentications", authenticationSchema);
