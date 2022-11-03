const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema ({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    protein: {
        type: Number,
    },
    carbs: {
        type: Number,
    },
    fats: {
        type: Number,
    },
    plan: {
        type:  Schema.Types.ObjectId,
        required: true,
        ref: 'Plan'
    }
});


module.exports = mongoose.model('Meal', mealSchema);