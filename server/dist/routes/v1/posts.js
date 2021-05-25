"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _PostController = _interopRequireDefault(require("../../controllers/PostController"));

var _auth = _interopRequireDefault(require("../../services/users/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postRoutes = (0, _express.Router)();
var postController = new _PostController["default"]();
postRoutes.use(_auth["default"]);
postRoutes.post('/', postController.newPost);
postRoutes.get('/', postController.getAll);
postRoutes.get('/:id', postController.getById);
postRoutes.put('/:id', postController.update);
postRoutes["delete"]('/:id', postController["delete"]);
var _default = postRoutes;
exports["default"] = _default;