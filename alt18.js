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

// Fetches the list and passes the data back to the callback
var fetch = function(callback) {
  scraper('http://www.siriusxm.com/altnation', function(err, $) {
    if (err) {
      return callback(err);
    }
    var text = $('.column.wide.left').text();
    var lines = text.split('\n');
    var tracks = [];
    for (var i = lines.length - 1; i >= 0; i--) {
      var line = parseLine(lines[i]);
      if (line !== null) {
        tracks.push(line);
      }
    };
    var date = text.match(/(Week\s+of\s+\w+\s+\d{1,2})/)[1];
    callback(null, date, tracks);
  });
};

// Export definition
exports.parseLine = parseLine;
exports.fetch = fetch;