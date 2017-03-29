'use strict';
const util   = require('../lib/util.js');
const _      = require('lodash');
const fs     = require('fs');
const moment = require('moment');

const resourcePath = 'resources/bookmarks';

const toLink = (bookmark) => {
  //[ 'id', 'dateAdded', 'index', 'parentId', 'title', 'url' ]
  let link =  {};

  if(bookmark.url) link.link = bookmark.url;
  if(bookmark.dateAdded) link.date = moment(bookmark.dateAdded).toDate();
  if(bookmark.title) link.title = bookmark.title;

  return link;
};

const parse = (filename) => {
  return util.loadFileContent(`${__dirname}/${resourcePath}/${filename}`)
    .then(JSON.parse)
    .then(bookmarks => _.map(bookmarks, toLink));
};

const getLinks = (filename = 'chrome_bookmarks.json') => {
  return parse(filename);
}

module.exports = {
  getLinks
}
