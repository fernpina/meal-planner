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
    return Performer.create(data.performers);
  })
  .then(function(performers) {
    console.log(performers);
    return Movie.create(data.movies);
  })
  .then(function(movies) {
    console.log(movies);
    return Promise.all([
      Performer.findOne({name: 'Mark Hamill'}),
      Movie.findOne({title: /Star Wars/})
    ]);
  })
  .then(function(results) {
    const mark = results[0];
    const starWars = results[1];
    starWars.cast.push(mark._id);
    return starWars.save();
  })
  .then(function(starWars) {
    console.log(starWars);
  })
  .then(process.exit);