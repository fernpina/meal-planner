var express = require('express');
var router = express.Router();
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meal Planner!' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    pompt: "select_account"
  }
));

// REVISIT ROUTES '/', THIS IS JUST TO ENSURE AUTHENTICATION
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function(){
    res.redirect('/')
  });
});

module.exports = router;