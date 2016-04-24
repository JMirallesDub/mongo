var assert = require('assert');
var connect = require('./connect');
var dbInterface = require('./interface');
var fs = require('fs');
var movies = require('./movies');


dbInterface.byDirector(db, 'George Lucas', function(error, docs) {
  if(error){
    console.log(error);
    process.exit(1)
  }
  docs.forEach(function(doc){
    console.log(JSON.stringify(doc));
  });

}
