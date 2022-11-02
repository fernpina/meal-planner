const Plan = require('../models/plan');
const Meal = require('../models/meal')

module.exports = {
    index,
    show,
    new: newPlan,
    create
}

function index(req, res) {
    Plan.find({}, function(err, plans){
        res.render('plans/index', { title: 'Meal Planner', plans })
    });
}

// Detail page
function show(req, res) {
    Plan.findById(req.params.id, function(err, plan){
         Meal.find({ plan: plan._id }, function(err, meals){
            res.render('plans/show', { title: 'Macros', plan, meals });
         });
    });
}

function newPlan(req, res) {
    res.render('plans/new', { title: 'Add Plans' })
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const plan = new Plan(req.body);
    plan.save(function(err){
        if(err) return res.redirect('/plans/new');
        console.log(plan);
        res.redirect(`/plans/${plan._id}`)
    });
}