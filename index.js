var fs = require('fs');
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

function uuid4() {
  return UUID3.v1();
}

function writeUUIDs(name, getUUID) {
  var stream = fs.createWriteStream(name);

  stream.once('open', function(fd) {

    var t = process.hrtime();
    for (var i = 0; i < 100000; i++) {
      stream.write(getUUID() + '\n');
    }
    var t1 = process.hrtime(t);

    stream.end();

    console.log("%s %d seconds and %d ms", name, t1[0], t1[1] / 1000000);
  });
}


console.log(1, uuid1());
console.log(2, uuid2());
console.log(3, uuid3());
console.log(4, uuid4());

writeUUIDs('1.txt', uuid1);
writeUUIDs('2.txt', uuid2);
writeUUIDs('3.txt', uuid3);
writeUUIDs('4.txt', uuid4);
