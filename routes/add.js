var express = require('express');
var router = express.Router();
var Contact = require('../models/addNew');

router.get('/', (req, res) => {
    var exist = req.flash('exist')[0];
    var success = req.flash('success')[0];
    var min = req.flash('min')[0];
    res.render('add', { exist, success});
})

router.post('/contact', (req, res, next) => {
    Contact.findOne({ number: req.body.number }, (err, number) => {
        if(err) return next(err);
        if(number) {
            req.flash('exist', 'Number Already Registered');
            return res.redirect('/add');
        }
        Contact.create(req.body, (err, contactCreated) => {
            if(err) return next(err);
            req.flash('success', 'ContactAdded');
            return res.redirect('/');
        })
    })  
})

module.exports = router;