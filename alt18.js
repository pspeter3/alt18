// Dependencies
var scraper = require('scraper');

// Parse a single line
var parseLine = function(line) {
    var match = line.match(/(\d{1,2})\.\s+(.+?)\s+-\s+\"(.+?)\"\s*$/);
    // Check for invalid input
    if(match === null) {
      return match;
    }
    // Parse input if valid
    var data = {
      rank: parseInt(match[1]),
      artist: match[2],
      track: match[3]
    }

    return data;
  };

// Export definition
exports.parseLine = parseLine;