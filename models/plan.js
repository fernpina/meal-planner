const mongoose = require('mongoose');
const meal = require('./meal');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

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
})

module.exports = mongoose.model('Plan', planSchema);