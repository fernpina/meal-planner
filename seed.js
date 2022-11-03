require('dotenv').config();
require('./config/database');

const Plan = require('./models/plan');
const Meal = require('./models/meal');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

const p1 = Plan.deleteMany({});
const p2 = Meal.deleteMany({});

romise.all([p1, p2])
  .then(function(results) {
    // results will be an array
    // of two result objects
    console.log(results);
    return Meal.create(data.meals);
  })
  .then(function(meals) {
    console.log(meals);
    return Plan.create(data.plans);
  })
  .then(function(plans) {
    console.log(plans);
    return Promise.all([
      Meal.findOne({name: 'Pancakes'}),
      Plan.findOne({plan: /Turkey Sandwich/})
    ]);
  })
  .then(function(results) {
    const mark = results[0];
    const turkeySandwich = results[1];
    turkeySandwich.contents.push(mark._id);
    return turkeySandwich.save();
  })
  .then(function(turkeySandwich) {
    console.log(turkeySandwich);
  })
  .then(process.exit);