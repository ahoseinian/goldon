var router = require('express').Router()
var Item = require('../../models/item')

router.get('/', function(req, res, next) {
  Item
    .find()
    .where({hidden: false})
    .exec(function(err, items) {
      if (err)
        return next(err)
      res.json(items)
    })
});

module.exports = router
