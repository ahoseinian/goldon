var router = require('express').Router()
var Item = require('../../../models/item')
var models = require('../../../models/models')
var colors = require('../../../models/color')
var async = require('async')
var save = require('./save')



router.get('/', function(req, res, next) {
  Item.find().sort('-date').exec(function(err, items) {
    if (err)
      return next(err)
    res.render('admin/item/index', {items, models})
  })
})

router.get('/new', function(req, res, next) {
  res.render('admin/item/new', {models, colors})
})

router.get('/:id/edit', function(req, res, next) {
  Item.findById(req.params.id).exec(function(err, item) {
    res.render('admin/item/new', {item, models, colors})
  })
})

router.post('/', save.newItem)
router.post('/:id', save.edit)

router.get('/:id/images', function(req, res, next) {
  res.render('admin/item/imageform', {id: req.params.id})
});

router.get('/:id/remove', require('./remove'))
router.post('/:id/images', require('./postImage'));

module.exports = router
