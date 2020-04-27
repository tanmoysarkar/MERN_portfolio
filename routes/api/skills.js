const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Skills Model 
const Skill = require('../../models/Skill');

//@route GET api/skills
// @desc Get all skills data
//@access public

router.get('/', (req, res) => {
    Skill.find()
        .sort({date: -1 })
        .then(skills => res.json(skills));

});

//@route POST api/skills
// @desc create an skills
//@access private

router.post('/', auth,  (req, res) => {
    const newSkill = new Skill({
        skill_name: req.body.skill_name,
        skill_progress: req.body.skill_progress,
        skill_buffer: req.body.skill_buffer

    });

    newSkill.save().then(skills => res.json(skills));
});

//@route DELETE api/education/:id
// @desc delete an education description
//@access private

router.delete('/:id', auth,  (req, res) => {
    Skill.findById(req.params.id)
    .then(education => education.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;