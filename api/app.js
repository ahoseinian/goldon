var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport')
var session = require('express-session')
var mongoose = require('mongoose')
var MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost/goldon')
var buildPath = path.join(__dirname, '/../build/')
var storagePath = path.join(__dirname, './storage')

var app = express();


app.use(express.static(buildPath))
app.use(express.static(storagePath))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));



app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: true,
  resave: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes'));



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
