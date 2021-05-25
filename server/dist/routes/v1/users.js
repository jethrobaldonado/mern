"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("../../controllers/UserController"));

var _auth = _interopRequireDefault(require("../../services/users/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRoutes = (0, _express.Router)();
var userController = new _UserController["default"]();
userRoutes.post('/login', userController.login);
userRoutes.post('/logout', userController.logout);
userRoutes.get('/me', _auth["default"], userController.me);
userRoutes.post('/register', userController.register);
var _default = userRoutes;
exports["default"] = _default;