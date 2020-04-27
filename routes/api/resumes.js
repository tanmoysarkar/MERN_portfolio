const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Resume Model 
const Resume = require('../../models/Resume');

//@route GET api/resume
// @desc Get all resume data
//@access public

router.get('/', (req, res) => {
    Resume.find()
        .sort({date: -1 })
        .then(resumes => res.json(resumes));

});

//@route POST api/resume
// @desc create an item
//@access private

router.post('/', auth,  (req, res) => {
    const newResume = new Resume({
        resume_user_name: req.body.resume_user_name,
        resume_about: req.body.resume_about,
        resume_contact_number: req.body.resume_contact_number,
        resume_address: req.body.resume_address,
        resume_email: req.body.resume_email,
        resume_image_link: req.body.resume_image_link

    });

    newResume.save().then(resume => res.json(resume));
});

//@route DELETE api/resume/:id
// @desc delete an resume description
//@access private

router.delete('/:id',  auth,  (req, res) => {
    Resume.findById(req.params.id)
    .then(resume => resume.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;