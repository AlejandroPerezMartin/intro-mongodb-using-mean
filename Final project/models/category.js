var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    _id: {
        type: String
    },
    parent: {
        type: String,
        ref: 'Category'
    },
    ancestors: [{
        type: String,
        ref: 'Category'
    }]
});

module.exports = categorySchema;
