var express = require('express');
var router = express.Router();
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meal Planner!' });
});

router.get('/auth/google', passport.authenticate(
  //Which passport strategy is being used?
  'google',
  {
    //Requesting the user's profile and email
    scope: ['profile', 'email'],
    //Optionally force pick account everytime
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


//OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(){
    res.redirect('/')
  });
});

module.exports = router;