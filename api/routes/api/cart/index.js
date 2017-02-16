var router = require('express').Router()
var Cart = require('../../../models/cart')

router.post('/', function(req, res, next) {
  var cart = new Cart(req.body);
  cart.save(function(err, doc) {
    if (err)
      return next(err)
    res.json(req.body)
  })
})

module.exports = router
