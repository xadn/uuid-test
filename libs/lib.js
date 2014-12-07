var UUID1 = require('./uuid_1');
var UUID2 = require('./uuid_2');
var UUID3 = require('./uuid_3');

var lib = {
  uuid1: function() { return new UUID1().toString(); },

  uuid2: function() { return UUID2(); },

  uuid3: function() { return UUID3.v4(); },

  uuid4: function() { return UUID3.v1(); }
};

module.exports = lib;