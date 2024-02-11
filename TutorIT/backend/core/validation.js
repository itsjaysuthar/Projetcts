const { check, validationResult, body } = require('express-validator');
const User = require('../models/user.model');

var validation = {};

validation.check = function (req, res, next) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		let msg = errors.array();
		// console.log(';;;;;;;');
		res.render('register', { 'errors': errors.array() });
	} else {
		next();
	}
}

validation.register = [
	check('email').isEmail().withMessage('Enter valid email address!'),
	check('password').isLength({ min: 6, max: 32 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,).withMessage('Please enter a password at least 6 character and contain At least one uppercase.At least one lower case.At least one special character.'),
	check('firstname').not().isEmpty().withMessage('firstname not should be empty!'),
	check('lastname').not().isEmpty().withMessage('lastname not should be empty!'),
	check('birthdate').not().isEmpty().withMessage('birthdate not should be empty!'),
	check('mobilenumber').isLength(10).withMessage('Mobile number should be 10 digit')
];


module.exports = validation;