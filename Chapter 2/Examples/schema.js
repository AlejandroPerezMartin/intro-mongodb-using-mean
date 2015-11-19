var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    loggedInCount: {
        type: Number,
        default: 0
    }
});

module.exports = loginSchema;
