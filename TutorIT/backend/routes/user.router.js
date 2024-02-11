var express = require('express');
var router = express.Router();
const user = require("../services/user.service");
const validation = require('../core/validation');


router.get('/getUser', user.getUsers);
router.get('/getUser/:id', user.getUser);

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


// login
// router.get('/login', (req, res, next) => {
//   res.render('login', { 'errors': '' });

// });
router.post('/login', user.login);


//signup
// router.get('/signup', (req, res, next) => {
//   res.render('register', { 'errors': '' });
// });

router.post('/signup', user.signup);

router.get('/logout', user.logout);

router.post('/addFeedback', user.addFeedback);


module.exports = router;
