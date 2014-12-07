var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var lib = require('./libs/lib');

var MAX_ITERATIONS = 10e6;

function collide(file, uuidFn) {
  var lines = fs.readFileSync(file, 'utf8').split('\n')
  var uuids = [];
  for (var i = 0; i < lines.length; i++) {
    uuids.push(lines[i]);
  }
  uuids.sort();

  for (var i = 0; i < MAX_ITERATIONS; i++) {
    if (_.indexOf(uuids, uuidFn(), true) !== -1) {
      console.log('collision generated after', i, 'iterations');
      process.exit(1);
    }
  }
  console.log('no collisions detected after', MAX_ITERATIONS, 'iterations')
  process.exit(0);
}

var file = path.resolve(process.argv[2]);
var uuidFnName = process.argv[3];

collide(file, lib[uuidFnName]);
