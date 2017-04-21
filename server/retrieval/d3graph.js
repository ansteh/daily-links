'use strict';
const _          = require('lodash');

const flatten = (tree, list = []) => {
  if(_.has(tree, 'branch')) {
    let children = _.map(tree.branch, (child) => {
      return {
        source: tree.name,
        target: child.name,
        type: "suit"
      }
    });

    list = _.concat(list, children);

    return _
      .chain(tree.branch)
      .map((child) => {
        return flatten(child);
      })
      .flatten()
      .concat(list)
      .value();
  }

  return list;
}

module.exports = {
  flatten
}
