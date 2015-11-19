var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    profile: {
        username: {
            type: String,
            required: true,
            lowercase: true
        },
        picture: {
            type: String,
            required: true,
            match: /^http:\/\//i
        }
    },
    data: {
        oauth: {
            type: String,
            required: true
        },
        cart: [{
            product: {
                type: mongoose.Schema.Types.ObjectId
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1
            }
        }]
    }
});

var currencySymbols = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£'
};

userSchema.virtual('displayPrice').get(function(){
    return currencySymbols[this.price.currency] + ' ' + this.price.amount;
});

userSchema.set('toObject', { virtuals: true});
userSchema.set('toJSON', { virtuals: true});

module.exports = userSchema;
