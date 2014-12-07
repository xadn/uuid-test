var lib = require('./libs/lib');

function generate(uuidFn, len) {
  var values = [];
  values.length = len;

  for (var i = 0; i < len; i++) {
    values[i] = uuidFn();
  }

  process.stdout.write(values.join('\n') + '\n');
  process.exit(0);
}

var uuidFnName = process.argv[2];
var len = Number(process.argv[3]);

generate(lib[uuidFnName], len);
