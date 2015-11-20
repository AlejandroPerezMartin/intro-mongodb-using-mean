var app = require('./server');
var assert = require('assert');
var superagent = require('superagent');

describe('server', function(){
    var server;

    beforeEach(function(){
        server = app.listen(3000);
    });

    afterEach(function(){
        server.close();
    });

    it('prints out Hello world when user goes to /', function(done){
        superagent.get('http://localhost:3000/', function(err, res){
            assert.ifError(err);
            assert.equal(res.status, 200);
            assert.equal(res.text, "Hello world");
            done();
        });
    });
});
