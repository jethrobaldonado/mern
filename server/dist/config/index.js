"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var envExists = _dotenv["default"].config();

if (envExists.error) {
  throw new Error('ENV file not found');
}

var _default = {
  port: process.env.PORT || 8082
};
exports["default"] = _default;