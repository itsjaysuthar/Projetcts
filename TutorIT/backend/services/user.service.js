const service = {};
const Appointment = require('../models/appointments.model');
const Authentication = require('../models/authentication.model');
const Feedback = require('../models/feedback.model');
const Tutor = require('../models/tutor.model');
const User = require('../models/user.model');
const utility = require('../core/utility')
const randToken = require('rand-token');
const mongoose = require('mongoose');

service.signup = async (req, res, next) => {
    let errors = [];

    // console.log(JSON.parse(JSON.stringify(req.body)));
    // console.log(req.body);
    let temp = Object.keys(JSON.parse(JSON.stringify(req.body)))
    temp = JSON.parse(temp[0])
    req.body = temp;
    // console.log(req.body);
    try {
        // if (req.body.password != req.body.confirmPassword) {
        //     res.json({ msg: 'Password is not mached' });
        //     // res.render('register', { 'errors': errors });

        // }
        const userExists = await Authentication.findOne({ email: req.body.email.toLowerCase() });
        if (!userExists) {
            const rand = await randToken.uid(10);
            let hashedPassword = await utility.createPassword(rand, req.body.password);

            const user = new User({
                name: req.body.name,
            });


            const response = await user.save();
            // console.log('[[[[[[');
            // console.log(response);
            const authentication = new Authentication({
                _id: response._id,
                rand: rand,
                email: req.body.email.toLowerCase(),
                password: hashedPassword,
                role: 0
            });
            const a = await authentication.save();
            // console.log(a);
            res.send({ data: response, auth: a });
            // res.redirect('/user/login');
        } else {
            res.send({ msg: 'User already exists' });
            // res.render('register', { 'errors': errors });
        }
    }
    catch (error) {
        res.send({ 'error': error });
    }

}

service.login = async (req, res, next) => {
    let errors = [];
    // console.log(req.user);
    // try {
        if (req.body.email == '') {
            res.send({ msg: 'Enter email address' });
            // res.render('login', { 'errors': errors });
        }
        // const userExists = await Authentication.find({ email: req.body.email });
        Authentication.find({email: req.body.email}, (err, response) => {
            res.json(response);
        });
    //     console.log(userExists);
    //     if (userExists) {
    //         // const enteredPassword = utility.createPassword(userExists.rand, req.body.password);
    //         // console.log(enteredPassword);
    //         // console.log(userExists.password);
    //         if (enteredPassword == userExists.password) {
    //             userExists.isActive = true;
    //             let response = await userExists.save();
    //             // return res.json(response);
    //             // await res.json('/index');
    //             res.send(response);
    //         } else {
    //             res.send({ msg: 'Enter Correct Password' });
    //             // res.render('login', { 'errors': errors });

    //         }
    //     } else {
    //         res.send({ msg: 'User is not Exists' });
    //         // res.render('login', { 'errors': errors });
    //     }
    // }
    // catch (error) {
    //     res.send({ 'error': error });
    // }

}

service.logout = async (req, res, next) => {
    req.session.destroy(() => {
        // res.redirect('/');
    })
}


service.addFavourite = async (req, res, next) => {
    const userExists = await User.findById({ _id: req.params.id });
    if (userExists) {
        let favouriteTutor = userExists.favouriteTutorId;
        favouriteTutor.push(mongoose.Schema.Types.ObjectId(tutorId));
    }
}

service.getUsers = async (req, res, next) => {
    User.find({}, (err, response) => {
        res.json(response);
    })
}

service.getUser = async (req, res, next) => {
    User.find({ _id: req.paramns.id }, (err, response) => {
        res.json(response);
    });
}


service.addFeedback = async (req, res, next) => {
    const feedback = await new Feedback({
        userId: req.body.userId,
        tutorId: req.body.tutorId,
        rating: parseFloat(req.body.rating),
        comment: req.body.comment
    });

    let response = await feedback.save()
    let feedbacks = await Feedback.find({ _id: req.body.tutorId });
    let count = await Feedback.count({ _id: req.body.tutorId });

    let total = feedbacks.reduce((initial, num) => num.rating + initial, 0)
    await Tutor.findOneAndUpdate({ _id: req.body.tutorId }, {
        $set: {
            rating: total / count,
        }
    })

    res.send({'data':response})
    //    let count = await 
}


module.exports = service;