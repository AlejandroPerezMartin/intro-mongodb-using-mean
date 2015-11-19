var mongoose = require('mongoose');
var schema = require('./schema.js');

mongoose.connect('mongodb://localhost:27017/test');

var User = mongoose.model('User', schema, 'users');

var user = new User({
    name: 'Alejandro',
    email: 'ale@perez.com'
});

user.save(function(err){

    if (err) return handleError(err);

    console.log("User " + user.name + " successfully added!");

    User.find({ 'email' : user.email }, function (err, docs) {

        if (err) return handleError(err);

        console.log("List of users: ", docs);

        mongoose.disconnect(function(){
            process.exit(0);
        });
    });

});
