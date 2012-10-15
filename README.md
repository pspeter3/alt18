Alt 18
======

A simple node.js library to parse the Alt 18 countdown from the website.

Installation
------------

    npm install alt18

Usage
-----

```javascript
var alt18 = require('alt18');
alt18.fetch(function(err, date, tracks) {
  if (err) {
    return console.error(err);
  }
  console.log(date, tracks);
});
```