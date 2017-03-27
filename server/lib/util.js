'use strict';
const fs = require('fs');

const loadFileContent = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, content) => {
      if(err) {
        reject(err)
      } else {
        try {
          resolve(content);
        } catch(err) {
          reject(err)
        }
      }
    })
  });
}

const writeFileContent = (filepath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, data, 'utf8', (err) => {
      if(err) {
        reject(err)
      } else {
        try {
          resolve(true);
        } catch(err) {
          reject(err)
        }
      }
    })
  });
}

module.exports = { loadFileContent, writeFileContent };
