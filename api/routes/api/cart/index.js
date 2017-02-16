var router = require('express').Router()
var cart = require('../../../models/cart')

router.post('/', function(req, res, next) {
  res.json(req.body)
});

module.exports = router
