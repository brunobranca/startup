(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = [];
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      if (this.listeners[event] !== callback) {
        this.listeners[event] = callback;
      }
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.listeners[event]) {
        delete this.listeners[event];
      }
    }
  }, {
    key: "emit",
    value: function emit(movie, event) {
      if (this.listeners[event]) {
        this.listeners[event](movie, event);
      }
    }
  }]);

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: 'Logg',
    value: function Logg(info, functionName) {
      console.log(info.title + ' ' + functionName);
    }
  }]);

  return Logger;
}();

exports.Logger = Logger;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

exports.Actor = Actor;

},{}],4:[function(require,module,exports){
'use strict';

var _EventEmitter = require('./EventEmitter');

var _Logger = require('./Logger');

var _movieClass = require('./movieClass');

var _actor = require('./actor');

var mylogger = new _Logger.Logger();

var Social = {
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName);
  },
  like: function like(friendName) {
    console.log(this.title + " likes " + friendName);
  }
};

var terminator = new _movieClass.movieClass("Terminator I", "1984", "107 mins");
console.log(terminator);
terminator.on('play', mylogger.Logg);
terminator.play();
console.log(terminator);
terminator.off('play');
terminator.play();
console.log(terminator);
Object.assign(terminator, Social);
console.log(terminator);

var rocky = new _movieClass.movieClass("Rocky I", "1976", "119 mins");
console.log(rocky);
rocky.on('play', mylogger.Logg);
rocky.play();
console.log(rocky);
Object.assign(rocky, Social);
console.log(rocky);

var starwars = new _movieClass.movieClass("Star Wars V", "1980", "124 mins");
console.log(starwars);
starwars.on('play', mylogger.Logg);
starwars.play();
console.log(starwars);
Object.assign(starwars, Social);
console.log(starwars);

terminator.share("me");
rocky.share("all");
starwars.like("Vader");

var arnold = new _actor.Actor('Arnold Schwarzenegger', 50);
var otherCast = [new _actor.Actor('Paul Winfield', 50), new _actor.Actor('Michael Biehn', 50), new _actor.Actor('Linda Hamilton', 50)];

terminator.addCast(arnold);
terminator.addCast(otherCast);
console.log(terminator);

},{"./EventEmitter":1,"./Logger":2,"./actor":3,"./movieClass":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EventEmitter2 = require('./EventEmitter');

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
}(_EventEmitter2.EventEmitter);

exports.movieClass = movieClass;

},{"./EventEmitter":1}]},{},[4]);
