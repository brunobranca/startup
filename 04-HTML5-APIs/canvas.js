
window.onload = function(){
 let x =  20;
 let y = 15;
 let speed = 2;

 function animate() {
   reqAnimFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame
     || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

     reqAnimFrame(animate);

     x += speed;

     if(x <= 0 || x >= 475){
         speed = -speed;
       }

     draw();
}

function draw() {
  let canvas  = document.getElementById("myCanvas");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0,6500, 170);
  context.fillStyle = getRndColor();
  context.fillRect(x, y, 100, 50);
  context.strokeStyle = getRndColor();
}

function getRndColor() {
  var r = 255*Math.random()|0,
  g = 255*Math.random()|0,
  b = 255*Math.random()|0;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
 }
 animate();
}
