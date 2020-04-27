const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Project Model 
const Project = require('../../models/Project');

//@route GET api/projects
// @desc Get all project data
//@access public

router.get('/', (req, res) => {
    Project.find()
        .sort({date: -1 })
        .then(projects => res.json(projects));

});

//@route POST api/projects
// @desc create an projects
//@access private

router.post('/', auth,  (req, res) => {
    const newproject = new Project({
        project_type: req.body.project_type,
        project_name: req.body.project_name,
        project_description: req.body.project_description,
        project_link: req.body.project_link,
        project_image_link: req.body.project_image_link

    });

    newproject.save().then(projects => res.json(projects));
});

//@route DELETE api/projects/:id
// @desc delete an projects description
//@access private

router.delete('/:id', auth,  (req, res) => {
    Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;