"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../../models/user.model"));

var _config = _interopRequireDefault(require("../../config"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService = /*#__PURE__*/function () {
  function UserService(res) {
    _classCallCheck(this, UserService);

    this.res = res;
  }

  _createClass(UserService, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password) {
        var user, validPassword, accessToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user["default"].findOne({
                  email: email
                });

              case 2:
                user = _context.sent;

                if (!user) {
                  _context.next = 10;
                  break;
                }

                _context.next = 6;
                return _bcrypt["default"].compare(password, user.password);

              case 6:
                validPassword = _context.sent;

                if (validPassword) {
                  accessToken = _jsonwebtoken["default"].sign({
                    email: user.email
                  }, _config["default"].accessTokenSecret);
                  this.res.status(200).json({
                    accessToken: accessToken
                  });
                } else {
                  this.res.status(400).json({
                    error: 'Invalid Password'
                  });
                }

                _context.next = 11;
                break;

              case 10:
                this.res.status(401).json({
                  error: 'User does not exist'
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email, username, password) {
        var _this = this;

        var salt, passwordHash, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _bcrypt["default"].genSalt(10);

              case 2:
                salt = _context2.sent;
                _context2.next = 5;
                return _bcrypt["default"].hash(password, salt);

              case 5:
                passwordHash = _context2.sent;
                user = new _user["default"]({
                  username: username,
                  password: passwordHash,
                  email: email
                });
                user.save().then(function (doc) {
                  return _this.res.status(201).send(doc);
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function register(_x3, _x4, _x5) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "details",
    value: function () {
      var _details = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(email) {
        var user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _user["default"].findOne({
                  email: email
                }, 'username email _id');

              case 2:
                user = _context3.sent;

                if (user) {
                  this.res.status(200).json(user);
                } else {
                  this.res.status(404).json({
                    error: 'User not found'
                  });
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function details(_x6) {
        return _details.apply(this, arguments);
      }

      return details;
    }()
  }]);

  return UserService;
}();

exports["default"] = UserService;