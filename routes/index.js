var express = require('express');
var router = express.Router();
var Contact = require('../models/addNew');

/* GET home page. */
router.get('/', function(req, res, next) {
  Contact.find({}, (err, contacts) => {
    res.render('index', { title: 'Contact Manager', contacts });
  }).sort({name: 1})
});


router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  Contact.findById(id, (err, contact) => {
      if(err) return next(err);
      res.render('edit', {contact});
  })
})

router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  Contact.findOneAndUpdate(id, req.body, (err, updated) => {
    if(err) return next(err);
    return res.redirect('/');
  })
})

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  Contact.findOneAndRemove(id, (err, deleted) => {
      if(err) return next(err);
      return res.redirect('/');
  })
})

module.exports = router;
