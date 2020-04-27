const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Education Model 
const Education = require('../../models/Education');

//@route GET api/education
// @desc Get all education data
//@access public

router.get('/', (req, res) => {
    Education.find()
        .sort({date: -1 })
        .then(educations => res.json(educations));

});

//@route POST api/education
// @desc create an Education
//@access private

router.post('/',  auth, (req, res) => {
    const newEducation = new Education({
        institute_name: req.body.institute_name,
        stream_branch: req.body.stream_branch,
        education_start_date: req.body.education_start_date,
        education_end_date: req.body.education_end_date,

    });

    newEducation.save().then(education => res.json(education));
});

//@route DELETE api/education/:id
// @desc delete an education description
//@access private

router.delete('/:id',  auth,  (req, res) => {
    Education.findById(req.params.id)
    .then(education => education.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;