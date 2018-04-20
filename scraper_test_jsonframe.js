let request = require('request');
let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');

var html = null;

request('http://oldschoolrunescape.wikia.com/wiki/Quests/List', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    html = body;
  });

let $ = cheerio.load(html);
jsonframe($);

var frame = {
  "quests" : {
    "selector": ".tr",
    "data": [{
      "name": ".td:nth-child(1) a"
    }]
  }
}

var questList = $.scrape(frame);

console.log(questList);

console.console.log('test');
