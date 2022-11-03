const Meal = require('../models/meal');
const Plan = require('../models/plan');



module.exports = {
    show,
    new: newMeal,
    create,
    delete: deleteMeal
}


function show(req, res) {
    Meal.findById(req.params.id, function (err, meal) {
        res.render('meals/show', {
            title: 'Meal details',
            meal
        })
    })
}

function newMeal(req, res) {
    Plan.find({}, function (err, plans) {
        res.render('meals/new', {
            title: 'Add Meal',
            plans,
            planId: req.params.id
        });
    });
}


function create(req, res) {
    req.body.user = req.user._id;
    req.body.plan = req.params.id;
    Meal.create(req.body, function (err, meal) {
        console.log(meal);
        res.redirect(`/plans/${req.params.id}`);
    });
}


function deleteMeal(req, res) {
    Meal.findOneAndDelete(
        // Ensue that the book was created by the logged in user
        { _id: req.params.id, user: req.user._id }, function (err) {
            // Deleted book, so must redirect to index
            res.redirect('/plans/${req.params.planId}');
        }
    );
}