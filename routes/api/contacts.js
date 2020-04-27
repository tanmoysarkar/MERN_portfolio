const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Contact Model 
const Contact = require('../../models/Contact');

//@route GET api/contacts
// @desc Get all contact data
//@access public

router.get('/', (req, res) => {
    Contact.find()
        .sort({date: -1 })
        .then(contacts => res.json(contacts));

});

//@route POST api/contacts
// @desc create an contacts
//@access private

router.post('/', auth,  (req, res) => {
    const newContact = new Contact({
        contact_name: req.body.contact_name,
        contact_phone: req.body.contact_phone,
        contact_email: req.body.contact_email,
        contact_skype: req.body.contact_skype,
        contact_image: req.body.contact_image

    });

    newContact.save().then(contacts => res.json(contacts));
});

//@route DELETE api/contact/:id
// @desc delete an contact description
//@access private

router.delete('/:id', auth,  (req, res) => {
    Contact.findById(req.params.id)
    .then(contact => contact.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;