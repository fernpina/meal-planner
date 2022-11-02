var express = require('express');
var router = express.Router();
const mealsCtrl = require('../controllers/meals')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/'

// Similar to performers in movies, starts with path of '/'
router.get('/plans/:id/meals/new', ensureLoggedIn, mealsCtrl.new);
router.post('/plans/:id/meals', mealsCtrl.create);
router.get('/meals/:id', ensureLoggedIn, mealsCtrl.show);

module.exports = router;
