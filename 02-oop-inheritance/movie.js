 class movieClass {
     constructor (title, year, duration){
       this.title=title;
       this.year=year;
       this.duration=duration;
     }

     play(){
     }

     pause(){
     }

     resume(){
     }

  }

   let movie1 = new movieClass ("Terminator I", "1984", "107 mins");

   console.log(movie1.title);
   console.log(movie1.year);
   console.log(movie1.duration);
   movie1.play();

   let movie2 = new movieClass ("Rocky I", "1976", "119 mins");

   console.log(movie2.title);
   console.log(movie2.year);
   console.log(movie2.duration);
   movie2.play();

   let movie3 = new movieClass ("Star Wars V", "1980", "124 mins");

   console.log(movie3.title);
   console.log(movie3.year);
   console.log(movie3.duration);
   movie3.play();


class EventEmitter {
 constructor() {
   this.listeners = new Map();
 }
 on(event, callback) {
   this.listeners.has(event) || this.listeners.set(event, []);
   this.listeners.get(event).push(callback);
 }
 removeListener(event, callback) {

   let listeners = this.listeners.get(event),
    index;

    if (listeners && listeners.length) {
        index = listeners.reduce((i, listener, index) => {
            return (isFunction(listener) && listener === callback) ?
                i = index :
                i;
        }, -1);

        if (index > -1) {
            listeners.splice(index, 1);
            this.listeners.set(event, listeners);
            return true;
        }
    }
    return false;
}

 emit(event, ...args) {
   let listeners = this.listeners.get(event);

   if (listeners && listeners.length) {
       listeners.forEach((listener) => {
           listener(...args);
       });
       return true;
   }
   return false;
 }
}

let isFunction = function(obj) {
 return typeof obj == 'function' || false;
 }

function mostrar() {console.log("Testing EventEmitter " + movie1.title)}
let myEmitter = new EventEmitter();
myEmitter.on(movie1.play(), mostrar);
myEmitter.emit(movie1.play(), movie1);
myEmitter.removeListener(movie1.play(), mostrar);
myEmitter.emit(movie1.play(), movie1);
