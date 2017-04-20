'use strict';
const express        = require('express');
const app            = express();

const fs             = require('fs');
const path           = require('path');

// const bodyParser     = require('body-parser');
// const cors           = require('cors');

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/client', express.static(path.resolve(__dirname, '../client')));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/api/graph', (req, res) => {
  res.json([
    {source: "Microsoft", target: "Amazon", type: "licensing"},
    {source: "Microsoft", target: "HTC", type: "licensing"},
    {source: "Samsung", target: "Apple", type: "suit"},
    {source: "Motorola", target: "Apple", type: "suit"},
    {source: "Nokia", target: "Apple", type: "resolved"},
    {source: "HTC", target: "Apple", type: "suit"},
    {source: "Kodak", target: "Apple", type: "suit"},
    {source: "Microsoft", target: "Barnes & Noble", type: "suit"},
    {source: "Microsoft", target: "Foxconn", type: "suit"},
    {source: "Oracle", target: "Google", type: "suit"},
    {source: "Apple", target: "HTC", type: "suit"},
    {source: "Microsoft", target: "Inventec", type: "suit"},
    {source: "Samsung", target: "Kodak", type: "resolved"},
    {source: "LG", target: "Kodak", type: "resolved"},
    {source: "RIM", target: "Kodak", type: "suit"},
    {source: "Sony", target: "LG", type: "suit"},
    {source: "Kodak", target: "LG", type: "resolved"},
    {source: "Apple", target: "Nokia", type: "resolved"},
    {source: "Qualcomm", target: "Nokia", type: "resolved"},
    {source: "Apple", target: "Motorola", type: "suit"},
    {source: "Microsoft", target: "Motorola", type: "suit"},
    {source: "Motorola", target: "Microsoft", type: "suit"},
    {source: "Huawei", target: "ZTE", type: "suit"},
    {source: "Ericsson", target: "ZTE", type: "suit"},
    {source: "Kodak", target: "Samsung", type: "resolved"},
    {source: "Apple", target: "Samsung", type: "suit"},
    {source: "Kodak", target: "RIM", type: "suit"},
    {source: "Nokia", target: "Qualcomm", type: "suit"}
  ]);
});

const server = require('http').Server(app);

server.listen(3000, () => {
  console.log('listening on *:3000');
});
