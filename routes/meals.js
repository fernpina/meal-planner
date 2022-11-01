var express = require('express');
var router = express.Router();
const mealsCtrl = require('../controllers/meals')
const ensureLoggedIn = require('../config/ensureLoggedIn');
const meals = require('../controllers/meals');

// Similar to performers in movies, starts with path of '/'
router.get('/meals/new', ensureLoggedIn, mealsCtrl.new);

module.exports = router;
