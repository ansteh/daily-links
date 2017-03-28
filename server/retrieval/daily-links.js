'use strict';
const util   = require('../lib/util.js');
const _      = require('lodash');
const fs     = require('fs');
const moment = require('moment');

const dailyLinksPath = 'resources/daily-links';

const parse = (filename) => {
  let dateStr = _.replace(filename, '.txt', '');
  let date = moment(dateStr, 'DD-MM-YYYY').toDate();

  return util.loadFileContent(`${__dirname}/${dailyLinksPath}/${filename}`)
  .then(content => _.dropRight(_.split(content, '\r\n')))
  .then(links => _.map(links, (link) => {
    return { date, link };
  }));
};

const getFiles = (folder) => {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      err ? reject(err) : resolve(files);
    })
  });
};

const getLinks = () => {
  return getFiles(`${__dirname}/${dailyLinksPath}`)
    .then(files => Promise.all(_.map(files, parse)))
    .then(batches => _.flatten(batches));
}
module.exports = {
  getLinks
}
