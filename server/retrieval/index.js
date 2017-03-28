'use strict';
const _          = require('lodash');
const graph      = require('url-graph');

const dailyLinks = require('./daily-links.js');
const chromemarks = require('./chrome-bookmarks.js');

// dailyLinks.getLinks()
//   .then(links => console.log(_.first(links)))
//   .catch(console.log);

// dailyLinks.getLinks()
//   .then(links => _.map(links, 'link'))
//   .then(urls => console.log(graph.treefy(urls)))
//   .catch(console.log);

chromemarks.getLinks('chrome_bookmarks.json')
  .then(console.log)
  .catch(console.log);
