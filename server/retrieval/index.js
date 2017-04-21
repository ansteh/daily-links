'use strict';
const _          = require('lodash');
const graph      = require('url-graph');
const Promise    = require('bluebird');

const explore     = require('./explore.js');
const dailyLinks  = require('./daily-links.js');
const chromemarks = require('./chrome-bookmarks.js');
const d3graph     = require('./d3graph.js');

const getAll = (providers) => {
  let promisedBatches = providers.map(provider => provider.getLinks());
  return Promise.all(promisedBatches)
    .then(batches => _
      .chain(batches)
      .flatten()
      .sortBy('date')
      .reverse()
      .value()
    );
};

const treefyAll = (providers) => {
  return getAll(providers)
    .then(links => _.filter(links, (link) => {
      return _.has(link, 'link');
    }))
    .then(links => _.map(links, 'link'))
    .then(urls => graph.treefy(urls));
};

// dailyLinks.getLinks()
//   .then(links => console.log(_.first(links)))
//   .catch(console.log);

// dailyLinks.getLinks()
//   .then(links => _.map(links, 'link'))
//   .then(urls => console.log(graph.treefy(urls)))
//   .catch(console.log);
//
// chromemarks.getLinks('chrome_bookmarks.json')
//   .then(console.log)
//   .catch(console.log);
//
// chromemarks.getLinks('chrome_bookmarks.json')
//   .then(links => _.takeRight(links, 3))
//   .then(console.log)
//   .catch(console.log);

// chromemarks.getLinks('chrome_bookmarks.json')
//   .then(links => explore.getPaths(links))
//   .then(console.log)
//   .catch(console.log);

// getAll([dailyLinks, chromemarks])
//   .then(console.log)
//   .catch(console.log);

// treefyAll([dailyLinks, chromemarks])
//   // .then(list => _.first(list))
//   .then(list => list[10])
//   .then(d3graph.flatten)
//   .then(console.log)
//   .catch(console.log);

const getSite = (index) => {
  return treefyAll([dailyLinks, chromemarks])
    .then(list => list[index])
    .then(d3graph.flatten);
};

const getSites = () => {
  return treefyAll([dailyLinks, chromemarks])
    .then((tree) => {
      return { name: '', branch: tree };
    })
    .then(d3graph.flatten)
    // .then(list => _.take(list, 50));
};

module.exports = {
  getSite,
  getSites
};
