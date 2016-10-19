'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EventEmitter2 = require('EventEmitter');

var EventEmitter = _interopRequireWildcard(_EventEmitter2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var movieClass = function (_EventEmitter) {
  _inherits(movieClass, _EventEmitter);

  function movieClass(title, year, duration) {
    _classCallCheck(this, movieClass);

    var _this = _possibleConstructorReturn(this, (movieClass.__proto__ || Object.getPrototypeOf(movieClass)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.cast = [];
    return _this;
  }

  // getTitle(){
  //   return this.title;
  // }

  _createClass(movieClass, [{
    key: 'play',
    value: function play() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), 'emit', this).call(this, this, 'play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), 'emit', this).call(this, this, 'pause');
    }
  }, {
    key: 'resume',
    value: function resume() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), 'emit', this).call(this, this, 'resume');
    }
  }, {
    key: 'addCast',
    value: function addCast(actor) {
      this.cast = this.cast.concat(actor);
    }
  }]);

  return movieClass;
}(EventEmitter);

exports.default = movieClass;