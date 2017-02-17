var router = require('express').Router()
var Item = require('../../../models/item')
var models = require('../../../models/models')
var async = require('async')

router.get('/', function(req, res, next) {
  Item
    .find()
    .sort('hidden')
    .exec(function(err, items) {
      if (err)
        return next(err)
      res.render('admin/item/index', {items, models})
    })
})

router.get('/new', function(req, res, next) {
  res.render('admin/item/new', {models})
})

router.post('/', function(req, res, next) {
  var item = new Item(req.body);
  item.save(function(err, item) {
    if (err)
      return next(err);
    res.redirect('/admin/items')
  })
})

router.get('/:id/images', function(req, res, next) {
  res.render('admin/item/imageform', {id: req.params.id})
});

router.get('/:id/remove', require('./remove'))

router.post('/:id/images', require('./postImage'));

module.exports = router
