'use strict';
const util   = require('../lib/util.js');
const _      = require('lodash');
const fs     = require('fs');
const moment = require('moment');

const resourcePath = 'resources/bookmarks';

const parse = (filename) => {
  return util.loadFileContent(`${__dirname}/${resourcePath}/${filename}`)
    .then(JSON.parse);
};

const getLinks = (filename) => {
  return parse(filename);
}

module.exports = {
  getLinks
}
