var router = require('express').Router()
var fs = require('fs')
var path = require('path')
var Image = require('../../../models/image')
var Item = require('../../../models/item')
var async = require('async')

router.get('/:id/remove', function(req, res, next) {
  async
    .series([
      function(cb) {
        Item
          .findOne({
            images: req.params.id
          }, function(err, item) {
            if (err)
              return cb(err)
            item.images.pull(req.params.id)
            item.save(cb)
          })
      },
      function(cb) {
        Image.remove({
          _id: req.params.id
        }, cb)
      },
      function(cb) {
        var filePath = path.join(__dirname, '../../../storage/images/original/', req.params.id + '.jpg')
        fs.unlink(filePath, cb)
      },
      function(cb) {
        var filePath = path.join(__dirname, '../../../storage/images/thumbs/', req.params.id + '.jpg')
        fs.unlink(filePath, cb)
      },
      function(cb) {
        var filePath = path.join(__dirname, '../../../storage/images/50/', req.params.id + '.jpg')
        fs.unlink(filePath, cb)
      }
    ], function(err) {
      if (err)
        return next(err)
      res.redirect('/admin/items')
    })
})

module.exports = router
