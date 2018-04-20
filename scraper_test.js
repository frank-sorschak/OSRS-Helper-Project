var cheerio = require('cheerio');
var request = require('request');

var $ = null;
request('http://oldschoolrunescape.wikia.com/wiki/Quests/List', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(html);
  }
});

var test = $('td:nth-child(3)').text();
console.log(test);
