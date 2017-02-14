var router = require('express').Router()
var path = require('path')

var buildPath = path.join(__dirname, '/../../build')

router.use('/api', require('./api'))
router.use('/admin', require('./admin'))
router.use(function(req, res, next){
  res.sendFile(buildPath + '/index.html')
})

module.exports = router
