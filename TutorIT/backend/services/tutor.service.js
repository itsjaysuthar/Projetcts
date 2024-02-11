const service = {};
const Appointment = require('../models/appointments.model');
const Authentication = require('../models/authentication.model');
const Tutor = require('../models/tutor.model');
const User = require('../models/user.model');
const utility = require('../core/utility')
const randToken = require('rand-token');
const mongoose = require('mongoose');

service.getTutors = async (req, res, next) => {
    Tutor.find({}, (err, response) => {
        res.json(response);
    })
}


service.getTutor = async (req, res, next) => {
    Tutor.find({ _id: req.paramns.id }, (err, response) => {
        res.json(response);
    });
}

service.addTutor = async (req, res, next) => {
    let errors = [];

    try {
        // if (req.body.password != req.body.confirmPassword) {
        //     res.json({ 'msg': 'password is not matched' });
        // }
        const tutorExist = await Authentication.findOne({ email: req.body.email.toLowerCase() });
        if (!tutorExist) {
            const rand = await randToken.uid(10);
            // let hashedPassword = await utility.createPassword(rand, req.body.password);
            const tutor = await new Tutor({
                name: req.body.name,
                email: req.body.email
                // about: req.body.about,
                // image: req.body.image,
                // rating: req.body.rating,
                // courses: req.body.courses,
            })

            let response = await tutor.save();
            console.log();
            const auth = new Authentication({
                _id: response._id,
                email: req.body.email.toLowerCase(),
                password: req.body.password,
                role: 1,
            });


            await auth.save();
            res.send({ 'data': response });
            // res.redirect('/user/login');
        } else {
            res.json({ 'msg': 'user is already exist' });

        }
    }
    catch (error) {
        res.json({ 'error': error });
    }

}

// service.tutorLogin = async (req, res, next) => {
//     let errors = [];
//     // console.log(req.user);
//     try {
//         if (req.body.email == '') {
//             res.json({ 'msg': 'enter email address' });
//         }
//         const tutorExist = await Tutor.findOne({ email: req.body.email.toLowerCase() });
//         if (tutorExist) {
//             const enteredPassword = utility.createPassword(tutorExist.rand, req.body.password);
//             // console.log(enteredPassword);
//             // console.log(userExists.password);
//             if (enteredPassword == tutorExist.password) {
//                 const token = await utility.createJwtToken({
//                     id: response._id,
//                     email: response.email
//                 });
//                 response = {
//                     ...JSON.parse(JSON.stringify(response)),
//                     token: token
//                 }
//                 res.json(response);
//             } else {
//                 res.json({ 'msg': 'enter correct password' });

//             }
//         } else {
//             res.json({ msg: 'User is not Exists' });
//             // res.render('login', { 'errors': errors });
//         }
//     }
//     catch (error) {
//         res.json({ 'error': error });
//     }
// }


// Update Tutor
service.updateTutor = async (req, res, next) => {
    let a = await Tutor.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    })
    res.json(a);
    console.log("a : ", a);
}

service.deleteTutor = async (req, res, next) => {
    Tutor.deleteOne({ _id: req.params.id }, async (err) => {
        if (err) res.json(err);
        Authentication.remove({ _id: req.params.id }, (err1) => {
            if (err1) res.json(err1);
        });
    });
    res.send({ 'msg': 'deleted successfullyyyyyyyyyyyyyyyyyyyy' });
    // res.json({})
}

module.exports = service;