var express = require('express');
var router = express.Router();

const tutor = require('../services/tutor.service');

router.get('/getTutor', tutor.getTutors);
router.get('/getTutor/:id', tutor.getTutor);

router.post('/addTutor', tutor.addTutor);

router.put('/updateTutor/:id', tutor.updateTutor);

router.delete('/deleteTutor/:id', tutor.deleteTutor);


module.exports = router;





// var express = require('express');
// var router = express.Router();

// var monk = require('monk');
// var db = monk('localhost:27017/onlineTutor');

// var collection = db.get('tutors');

// // base URL: /tutors

// // GET all tutors
// router.get('/', function(req, res) {
//   collection.find({}, function(err, tutors){
//     if(err) throw err;
//       res.json(tutors);
//   });
// });

// // GET a single tutor
// router.get('/:id', function(req, res) {
//     collection.find({_id: parseInt(req.params.id)}, function(err, tutor){
//         if(err) throw err;
//         res.json(tutor);
//     });
// });

// // Insert new Tutor
// router.post('/', function(req, res) {
//     collection.insert({

//         _id: parseInt(req.body._id),
//         name: req.body.name,
//         about: req.body.about,
//         image: req.body.image,
//         rating: req.body.rating,
//         expertise: req.body.expertise,
//         email: req.body.email,
//         Availability: req.body.Availability

//     }, function(err, tutor){
//       if(err) throw err;
//         res.json(tutor);
//     });
// });

// // Update tutor
// router.put('/:id', function(req, res) {
//     collection.update({_id: parseInt(req.params.id)},
//         {
//             $set: {
//                 _id: parseInt(req.body._id),
//                 name: req.body.name,
//                 about: req.body.about,
//                 image: req.body.image,
//                 rating: req.body.rating,
//                 expertise: req.body.expertise,
//                 email: req.body.email,
//                 Availability: req.body.Availability
//             }
//         }
//     ,function(err, tutor){
//         if(err) throw err;
//         res.json(tutor);
//     });
// });

// // Delete tutor
// router.delete('/:id', function(req, res) {
//     collection.remove({_id: parseInt(req.params.id)}, function(err, tutor){
//         if(err) throw err;
//         res.json(tutor);
//     });
// });

// module.exports = router;
