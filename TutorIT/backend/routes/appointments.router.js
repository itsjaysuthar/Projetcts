var express = require('express');
var router = express.Router();

const appointment = require('../services/appointments.service');

router.get('/getAppointment', appointment.getAppointments);
router.get('/getAppointment/:id', appointment.getAppointment);

router.post('/addAppointment', appointment.addAppointment);

router.put('/updateAppointment/:id', appointment.updateAppointment);
router.delete('/deleteAppointment/:id', appointment.deleteAppointment);

module.exports = router;
