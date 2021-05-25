"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var _routes = _interopRequireDefault(require("./routes"));

var _models = _interopRequireDefault(require("./models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use('/', _routes["default"]);

_models["default"].mongoose.connect("mongodb://".concat(_config["default"].dbHost, ":").concat(_config["default"].dbPort, "/").concat(_config["default"].dbName), {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('Successfully connected');
})["catch"](function (err) {
  console.log('Connection error, ', err);
  process.exit;
});

app.listen(_config["default"].port);