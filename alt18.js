// Dependencies
var scraper = require('scraper');

// Parse a single line
var parseLine = function(line) {
  var match = line.match(/(\d{,2})\.\s+(.+?)\s+-\s+\"(.+?)\"\s*$/);
  // Check for invalid input
  if (match === null) {
    return match;
  }
};

// Export definition
exports.parseLine = parseLine;