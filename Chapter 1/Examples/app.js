var _ = require('underscore');
var MongoClient = require('mongodb').MongoClient;

_.each([1,2,3], function(v){
    console.log(v)
});

MongoClient.connect('mongodb://localhost:27017/example', function(err, db) {

  if (err) throw err;

  var sample = db.collection('sample');

  sample.insert({x:1}, function(err, result){
      if (err) throw err;

      console.log("Successfully inserted 1 document");
  });

  sample.find().toArray(function(err, docs){
      if (err) throw err;

      docs.forEach(function(doc){
          console.log(JSON.stringify(doc));
      });

      return db.close();
  });

  console.log("Connected correctly to server");

});
