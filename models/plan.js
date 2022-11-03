const mongoose = require('mongoose');
const meal = require('./meal');
const Schema = mongoose.Schema;

const planSchema = new Schema({
    plan: {
        type: String,
    },
    
    category: {
        type: String,
        required: true,
        enum: ['Bulk', 'Cut', 'High Protien', 'Low Carb'],
        default: 'Bulk',
        available: {
            type: Boolean,
            default: false
        }
    },
  contents: [{
    type: Schema.Types.ObjectId,
    ref: 'Meals'
  }]
}, {
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);