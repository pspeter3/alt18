// Dependencies
var assert = require('assert'),
  vows = require('vows'),
  alt18 = require('./alt18');

// Create test suite
vows.describe('Alt18').addBatch({
  'when parsing a line': {
    'should hanlde an empty line': function() {
      assert.equal(alt18.parseLine(''), null);
    },
    'should handle an a valid line': function() {
      var data = alt18.parseLine('18. The Neighbourhood - "Female Robbery"');
      assert.equal(data.rank, 18);
      assert.equal(data.artist, 'The Neighbourhood');
      assert.equal(data.track, 'Female Robbery');
    }
  }
}).run();