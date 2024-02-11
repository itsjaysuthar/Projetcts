const service = {};
const Appointment = require('../models/appointments.model');
const Authentication = require('../models/authentication.model');
const Tutor = require('../models/tutor.model');
const User = require('../models/user.model');
const utility = require('../core/utility')
const randToken = require('rand-token');
const mongoose = require('mongoose');


service.getAppointments = async (req, res, next) => {
    // console.log(']]]]]]]]]]]');
    let response = Appointment.find({}, (err, response) => {
        if (err) res.send(err);
        res.send(response);

    });
    // console.log(response);
    // res.json(JSON.stringify(response));
}

service.getAppointment = async (req, res, next) => {
    console.log(']]]]]]]]]]]');
    let response = Appointment.find({tutorId: String(req.params.id)}, (err, response) => {
        if (err) res.send(err);
        res.send(response);

    });
    // console.log(response);
    // res.json(JSON.stringify(response));
}



service.addAppointment = async (req, res, next) => {
    const appointment = new Appointment({
        courseCode: req.body.courseCode,
        tutorId: req.body.tutorId,
        appointmentDate: req.body.appointmentDate,
        appointmentLocation: req.body.appointmentLocation,
        appointmentTime: req.body.appointmentTime
    });
    const response = await appointment.save();
    res.json(response);
}

service.updateAppointment = async (req, res, next) => {
    // let id = req.params.id;
    console.log(">>>>", req.body);
    const response = await Appointment.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    });
    res.send(response);
}

service.deleteAppointment = async (req, res, next) => {
    Appointment.deleteOne({ _id: req.params.id }, (err) => {
        if (err) res.json(err);
    });
    res.send({ 'msg': 'deleted successfullyyyyyyyyyyyyyyyyyyyy' });

    // res.send();
}

module.exports = service;