var UUID1 = require('./uuid_1');
var UUID2 = require('./uuid_2');
var UUID3 = require('./uuid_3');

function uuid1() {
  return new UUID1().toString();
}

function uuid2() {
  return UUID2();
}

function uuid3() {
  return UUID3.v4();
}

console.log(1, uuid1())
console.log(2, uuid2())
// console.log(3, uuid3())