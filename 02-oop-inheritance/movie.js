class EventEmitter {
  constructor() {
    this.listeners = [];
  }

  on (event, callback) {
    if(this.listeners[event] !== callback){
      this.listeners[event] = callback
    }
  }

  off(event, callback) {
      if(this.listeners[event]){
      delete this.listeners[event];
    }
 }

  emit(movie, event) {
    if(this.listeners[event]){
    this.listeners[event](movie, event);
    }
  }
}

class Logger{
  constructor(){
  }

  Logg(info, functionName){
      console.log(info.title + ' ' + functionName)
  }
}

let mylogger = new Logger();

 class movieClass extends EventEmitter{
     constructor (title, year, duration){
       super();
       this.title=title;
       this.year=year;
       this.duration=duration;
     }

    // getTitle(){
    //   return this.title;
    // }

     play(){
       super.emit(this, 'play')
     }

     pause(){
       super.emit(this, 'pause')
     }

     resume(){
       super.emit(this, 'resume')
     }

  }


   let movie1 = new movieClass ("Terminator I", "1984", "107 mins");

   console.log(movie1);
   movie1.on('play', mylogger.Logg);
   movie1.play();
   console.log(movie1);
   movie1.off('play');
   movie1.play();

  let movie2 = new movieClass ("Rocky I", "1976", "119 mins");

  console.log(movie2);
  movie2.on(movie2, mylogger.Logg);
  movie2.play();

  let movie3 = new movieClass ("Star Wars V", "1980", "124 mins");

  console.log(movie3);
  movie3.on(movie3, mylogger.Logg);
  movie3.play();
