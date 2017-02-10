var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

var adminUser = {
  id: 0,
  username: 'mamad'
}

passport.use(new LocalStrategy(function(username, password, done) {
  if (username !== 'mamad' || password !== 'zxcvb') {
    return done(null, false, {message: 'Incorrect username or password.'});
  }
  return done(null, adminUser);
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  if (id === 0)
    done(null, adminUser)
  else
    done('incorrect user')
});

module.exports = passport
