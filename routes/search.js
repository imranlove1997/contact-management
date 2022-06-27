var express = require('express');
var router = express.Router();
var Contact = require('../models/addNew');

router.get('/', (req, res, next) => {
    res.render('search');
})

router.post('/find', (req, res, next) => {
    var query = req.body.name
    var regex = new RegExp(query, 'i');
    Contact.find({name: regex}, (err, data) => {
        if(err) return next(err);
        return res.render('find', { data });
    }).sort({name: 1})
})

module.exports = router;