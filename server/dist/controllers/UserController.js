"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("../services/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController = /*#__PURE__*/function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var body, userService;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = req.body;

                if (body.email && body.password) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", res.status(400).send({
                  error: 'Fields are required'
                }));

              case 3:
                userService = new _users["default"](res);
                return _context.abrupt("return", userService.login(body.email, body.password));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", res.status(200).json({
                  'test': 'test'
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function logout(_x3, _x4) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "me",
    value: function () {
      var _me = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var userService;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userService = new _users["default"](res);
                _context3.prev = 1;
                return _context3.abrupt("return", userService.details(req.user.email));

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](1);
                res.status(400).send({
                  error: _context3.t0
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 5]]);
      }));

      function me(_x5, _x6) {
        return _me.apply(this, arguments);
      }

      return me;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var body, userService;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                body = req.body;

                if (body.email && body.password && body.username) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", res.status(400).send({
                  error: 'Fields are required'
                }));

              case 3:
                userService = new _users["default"](res);
                return _context4.abrupt("return", userService.register(body.email, body.username, body.password));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function register(_x7, _x8) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }]);

  return UserController;
}();

exports["default"] = UserController;