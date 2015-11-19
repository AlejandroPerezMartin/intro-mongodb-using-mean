var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Category = require('./category');

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pictures: [{
        type: String,
        match: /^http:\/\//i/
    }],
    price : {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            enum: ['USD', 'EUR', 'GBP'],
            required: true
        }
    },
    category: Category.categorySchema
});

module.exports = productSchema;
