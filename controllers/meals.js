const Meal = require('../models/meal');
const Plan = require('../models/plan');



module.exports = {
    show,
    new: newMeal,
    create,
}


function show(req, res) {
    Meal.findById(req.params.id, function(err, meal) {
        res.render('meals/show', {
            title: 'Meal details'
        })
    })
}

function newMeal(req, res) {
    Meal.find({})
    .sort('name')
    .exec(function (err, meals){
        res.render('meals/new', {
            title: 'Add Meal',
            meals
        });
    });
}

function create(req, res) {
    req.body.user = req.params.id;
    Meal.create(req.body, function(err, meal){
        res.redirect(`/plans/${req.params.id}`);
    });
}

function addToMeal(req, res) {
    Meal.findById(req.params.id, function(err, meal) {
        meal.contents.push(req.body.meals);
        meal.save(function(err) {
            res.redirect(`/plans/${plan._id}`);
        });
    });
}