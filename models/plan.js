const mongoose = require('mongoose');
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
        defailt: 5
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
    Plan: {
        type: String,
    },
    Chicken: [{
        type: Schema.Types.ObjectId,
    }],
    Steak: [{
        type: Schema.Types.ObjectId,
    }],
    User: {
        type: Schema.Types.ObjectId,
    },
    userName: String,
    userAvatar: String
}, {
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);