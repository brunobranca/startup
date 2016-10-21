import {EventEmitter} from './EventEmitter';
import {Logger} from './Logger';
import {movieClass} from './movieClass';
import {Actor} from './actor';

let mylogger = new Logger();

let Social = {
  share: function(friendName) {
     console.log("Share " + this.title + " with " + friendName);
   },
   like: function(friendName) {
     console.log(this.title + " likes " + friendName);
  }
}

let terminator = new movieClass ("Terminator I", "1984", "107 mins");
  console.log(terminator);
  terminator.on('play', mylogger.Logg);
  terminator.play();
  console.log(terminator);
  terminator.off('play');
  terminator.play();
  console.log(terminator);
  Object.assign(terminator, Social);
  console.log(terminator);

let rocky = new movieClass ("Rocky I", "1976", "119 mins");
  console.log(rocky);
  rocky.on('play', mylogger.Logg);
  rocky.play();
  console.log(rocky);
  Object.assign(rocky, Social);
  console.log(rocky);

let starwars = new movieClass ("Star Wars V", "1980", "124 mins");
  console.log(starwars);
  starwars.on('play', mylogger.Logg);
  starwars.play();
  console.log(starwars);
  Object.assign(starwars, Social);
  console.log(starwars);

terminator.share("me");
rocky.share("all");
starwars.like("Vader");

let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
     new Actor('Paul Winfield', 50),
     new Actor('Michael Biehn', 50),
     new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast);
console.log(terminator);
