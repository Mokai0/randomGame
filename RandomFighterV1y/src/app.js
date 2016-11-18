'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));
app.use('../', express.static('app'));

app.listen(3000, function() {
  console.log('serving');
});