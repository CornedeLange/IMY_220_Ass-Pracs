"use strict";

var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
app.use(express.json());

//app.use(express.static("frontend/public"));
app.use(express["static"](path.join(__dirname, '..', '..', 'frontend', 'public')));
app.get('*', function (req, res) {
  // res.sendFile(indexPath);
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});
app.listen(port, function () {
  console.log("Listening on http://localhost:".concat(port));
});