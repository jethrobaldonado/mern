"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("./users"));

var _posts = _interopRequireDefault(require("./posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var v1Router = (0, _express.Router)();
v1Router.use('/v1/users', _users["default"]);
v1Router.use('/v1/posts', _posts["default"]);
var _default = v1Router;
exports["default"] = _default;