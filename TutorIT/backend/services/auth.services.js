const service = {};
const Authentication = require('../models/authentication.model');
const Tutor = require('../models/tutor.model');
const mongoose = require('mongoose');

service.login = async (req, res, next) => {
    Authentication.find({}, (err, response) => {
        
        res.send(response);
    })
}

module.exports = service