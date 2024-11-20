"use strict";

var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
app.use(express.json());

//MULTER // FILE/IMAGE UPLOADS

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    // cb = callback
    cb(null, "backend/uploadedImages/"); // "frontend/public/assests/images"
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var uploadImage = (0, _multer["default"])({
  storage: storage
});
app.post('/upload', uploadImage.single("image"), function (req, res) {
  res.json({
    status: 200,
    message: "Image uplaoded successfully"
  });
});

//app.use(express.static("frontend/public"));
app.use(express["static"](path.join(__dirname, '..', '..', 'frontend', 'public')));
app.get('*', function (req, res) {
  // res.sendFile(indexPath);
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});
app.listen(port, function () {
  console.log("Listening on http://localhost:".concat(port));
});