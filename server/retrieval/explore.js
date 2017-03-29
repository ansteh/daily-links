'use strict';
const pathfinder = require('json-pathfinder');
const _          = require('lodash');

const getPaths = (collection) => {
  return _.reduce(collection, (paths, json) => {
    return _
      .chain(paths)
      .concat(pathfinder.parse(json))
      .uniq()
      .value();
  }, []);
};

module.exports = {
  getPaths
}
