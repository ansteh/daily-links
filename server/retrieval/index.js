'use strict';
const _          = require('lodash');
const dailyLinks = require('./parse-daily-links.js');
const graph      = require('url-graph');

// dailyLinks.getLinks()
//   .then(links => console.log(_.first(links)))
//   .catch(console.log);

dailyLinks.getLinks()
  .then(links => _.map(links, 'link'))
  .then(urls => console.log(graph.treefy(urls)))
  .catch(console.log);
