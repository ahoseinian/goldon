var router = require('express').Router()
var Item = require('../../../models/item')
var models = require('../../../models/models')
var colors = require('../../../models/color')
var async = require('async')

const goToList = (res) => (next) => (err) => {
  if(err)
    return next(err)
  res.redirect('/admin/items')
}

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
  res.render('admin/item/new', {models, colors})
})

router.get('/:id/edit', function(req, res, next) {
  Item
    .findById(req.params.id)
    .exec(function(err, item) {
      res.render('admin/item/new', {item, models, colors})
    })
})

router.post('/', function(req, res, next) {
  var item = new Item(req.body);
  item.save(goToList(res)(next))
})

router.post('/:id', function(req, res, next) {
  Item
    .findById(req.params.id, function(err, item) {
      if (err)
        return next(err);
      item = Object.assign(item, req.body);
      item.save(goToList(res)(next))
    })
})

router.get('/:id/images', function(req, res, next) {
  res.render('admin/item/imageform', {id: req.params.id})
});

router.get('/:id/remove', require('./remove'))

router.post('/:id/images', require('./postImage'));

module.exports = router
