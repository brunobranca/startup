'use strict';

var _EventEmitter = require('EventEmitter');

var EventEmitter = _interopRequireWildcard(_EventEmitter);

var _Logger = require('Logger');

var Logger = _interopRequireWildcard(_Logger);

var _movieClass = require('movieClass');

var movieClass = _interopRequireWildcard(_movieClass);

var _actor = require('actor');

var Actor = _interopRequireWildcard(_actor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mylogger = new Logger();

var Social = {
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName);
  },
  like: function like(friendName) {
    console.log(this.title + " likes " + friendName);
  }
};

var terminator = new movieClass("Terminator I", "1984", "107 mins");
console.log(terminator);
terminator.on('play', mylogger.Logg);
terminator.play();
console.log(terminator);
terminator.off('play');
terminator.play();
console.log(terminator);
Object.assign(terminator, Social);
console.log(terminator);

var rocky = new movieClass("Rocky I", "1976", "119 mins");
console.log(rocky);
rocky.on('play', mylogger.Logg);
rocky.play();
console.log(rocky);
Object.assign(rocky, Social);
console.log(rocky);

var starwars = new movieClass("Star Wars V", "1980", "124 mins");
console.log(starwars);
starwars.on('play', mylogger.Logg);
starwars.play();
console.log(starwars);
Object.assign(starwars, Social);
console.log(starwars);

terminator.share("me");
rocky.share("all");
starwars.like("Vader");

var arnold = new Actor('Arnold Schwarzenegger', 50);
var otherCast = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];

terminator.addCast(arnold);
terminator.addCast(otherCast);
console.log(terminator);