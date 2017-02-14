var router = require('express').Router()
var Item = require('../../models/item')

router.get('/', require('./all'));
router.get('/:id', require('./single'));

module.exports = router
