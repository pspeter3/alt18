// Dependencies
var assert = require('assert'),
  vows = require('vows'),
  alt18 = require('alt18');

// Create test suite
vows.describe('Alt18').addBatch({
  'when parsing a line': {
    'should hanlde an empty line': function() {
      assert(alt18.parseLine(''), {});
    }
  }
}).run();