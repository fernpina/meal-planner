const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema ({
    Protein: {
        type: String,
    },
    Carbs: {
        type: String,
    },
    Fats: {
        type: String
    }
});


module.exports = mongoose.model('Meal', mealSchema);