var express = require('express');
var router = express.Router();
const mealsCtrl = require('../controllers/meals')
const ensureLoggedIn = require('../config/ensureLoggedIn');


// Similar to performers in movies, starts with path of '/'
router.post('/meals/new', ensureLoggedIn, mealsCtrl.new);

module.exports = router;
