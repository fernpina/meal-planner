var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// require the session middleware
var session = require('express-session');
// method override for our edit and delete functionality
var methodOverride = require('method-override');
// require the passport
var passport = require('passport');


// Important to require dotenv before any
// module that depends on .env file 
require('dotenv').config();
// CONNECT TO ATLAS/MONGO AFTER DOTENV HAS PROCESSED
require('./config/database');
// Configure passport middleware
require('./config/passport');

var indexRouter = require('./routes/index');
var mealsRouter = require('./routes/meals');
var plansRouter = require('./routes/plans');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
// mount the session middleware
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// mount our passport
app.use(passport.initialize());
app.use(passport.session());

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
const isLoggedIn = require('./config/ensureLoggedIn');

app.use('/', indexRouter);
app.use('/plans', plansRouter);
app.use('/', mealsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
