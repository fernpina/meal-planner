const Plan = require('../models/plan');
const Meal = require('../models/meal')

module.exports = {
    index,
    show,
    new: newPlan,
    create,
    edit: editPlan,
    update,
    delete: deletePlan
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
            res.render('plans/show', { title: 'Meal Planner', plan, meals });
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

function editPlan(req, res) {
    Plan.findOne({_id: req.params.id, user: req.user._id}, function(err, plan) {
      if (err || !plan) return res.redirect('/plans');
      res.render('plans/edit', {title: 'edit plan', plan});
    });
  }

  function update(req, res) {
    Plan.findOneAndUpdate(
      {_id: req.params.id, user: req.user._id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, plan) {
        if (err || !plan) return res.redirect('/plans');
        res.redirect(`/plans/${plan._id}`);
      }
    );
  }

function deletePlan(req,res) {
    Plan.findOneAndDelete(
        {_id: req.params.id, user: req.user._id}, function(err) {
            res.redirect('/plans');
        }
    );
}