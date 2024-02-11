const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema({
    courseCode: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId },
    tutorId: { type:String },
    appointmentDate: { type: Date },
    appointmentLocation: { type: String },
    appointmentTime: { type: String },
    appointmentDuration: { type: String, default: "1" },
    isBooked: { type: Boolean, default: false },
    isDone: { type: Boolean, default: false },


});

module.exports = mongoose.model("Appointment", appointmentsSchema);