"use strict";

var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
app.use(express["static"]("public"));
app.listen(port, function () {
  console.log("Listening on http://localhost:".concat(port));
});