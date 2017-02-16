var router = require('express').Router()
var Item = require('../../models/item')

router.get('/', require('./all'));
router.get('/:id', require('./single'));
router.use('/cart', require('./cart'));

module.exports = router
