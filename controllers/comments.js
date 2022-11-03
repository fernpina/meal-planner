const Plan = require('../models/plan');

module.exports = {
    create
}

function create(req, res) {
    Plan.findById(req.params.id, function(err, plan) {
        plan.comments.push(req.body);
        plan.save(function(err) {
            res.redirect(`/plans/${plan._id}`);
        });
    });
}
