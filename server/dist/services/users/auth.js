"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var jwtAuth = function jwtAuth(req, res, next) {
  var authorization = req.headers.authorization;

  if (authorization) {
    var token = authorization.split(' ')[1];

    _jsonwebtoken["default"].verify(token, _config["default"].accessTokenSecret, function (err, user) {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

var _default = jwtAuth;
exports["default"] = _default;