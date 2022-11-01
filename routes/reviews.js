const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// All routes "starts with" / (root)

// POST /meals/:id/reviews
router.post('/meals/:id/reviews', reviewsCtrl.create);

module.exports = router;