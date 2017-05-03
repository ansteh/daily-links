'use strict';
const express        = require('express');
const app            = express();

const fs             = require('fs');
const path           = require('path');

const retrieval      = require('./retrieval');

// const bodyParser     = require('body-parser');
// const cors           = require('cors');

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/client', express.static(path.resolve(__dirname, '../client')));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/api/domains', (req, res) => {
  retrieval.getDomains()
    .then((list) => {
      // console.log(list);
      res.json(list);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('Something broke!');
    });
});

app.get('/api/graph', (req, res) => {
  // retrieval.getSites()
  retrieval.getSite(11)
    .then((list) => {
      // console.log(list);
      res.json(list);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('Something broke!');
    });
});

const server = require('http').Server(app);

server.listen(3000, () => {
  console.log('listening on *:3000');
});
