var express = require('express');
var app = express();
var router = express.Router();

// GET and POSTS requests handlers
router.get('/', function(req, res) {
    res.send("Welcome!");
});

app.use(router);

module.exports = app;
