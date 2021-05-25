"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Post = _mongoose["default"].model('Post', new _mongoose["default"].Schema({
  title: String,
  content: String,
  userId: String,
  created_at: Date
}));

var _default = Post;
exports["default"] = _default;