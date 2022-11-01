var express = require('express');
var router = express.Router();
const plansCtrl = require('../controllers/plans')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', plansCtrl.index);
router.get('/new', ensureLoggedIn, plansCtrl.new);
router.get('/:id', plansCtrl.show);
router.post('/', ensureLoggedIn, plansCtrl.create);

module.exports = router;