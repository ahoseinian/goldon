var router = require('express').Router()
var passport = require('../passport')
function ensureLogin(req, res, next) {
  if (req.user)
   next()
  else
    res.redirect('/admin/login')
}

router.get('/', ensureLogin, function(req, res, next) {
  res.render('admin/index')
})

router.use('/items', ensureLogin, require('./items'))
router.use('/purchases', ensureLogin, require('./purchases'))
router.use('/images', ensureLogin, require('./images'))

router.get('/login', function(req, res, next) {
  res.render('admin/login');
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/admin/login?error=true'
}))

module.exports = router
