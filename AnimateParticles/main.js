function ballClass() {
  this.x = 75;
  this.y = 75;
  this.velX = 5;
  this.velY = 7;
  this.move = function(){
    this.x += this.velX;
    this.y += this.velY;

    if (this.x < 0) {
      this.velX *= -1
    }
    if (this.x > canvas.width) {
      this.velX *= -1
    }
    if (this.y < 0) {
      this.velY *= -1
    }
    if (this.y > canvas.height) {
      this.velY *= -1
    }
  }
  this.draw = function() {
    colorCircle(this.x, this.y, 10, BallColour);
  }
}

var canvas, canvasContext;
var AllBalls = [];
var BallAmount = prompt('Ball Amount: ');
var BallSpeedScale = prompt('Ball Speed: ');
var BallColour = prompt('Ball Colour');

window.onload = function() {
  canvas = document.getElementById('AnimateCanvas');
  canvasContext = canvas.getContext('2d');

  var tempBall;
  for (var i = 0; i < BallAmount; i++) {
      var tempBall = new ballClass();
      tempBall.x = Math.random()*canvas.width;
      tempBall.y = Math.random()*canvas.height;
      tempBall.velX = Math.random()*BallSpeedScale;
      tempBall.velY = Math.random()*BallSpeedScale;
      AllBalls.push(tempBall);
  }

  var fps = 50;
  setInterval(updateAll, 1000/fps); // set a delay for functions called again and again
}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  for (var i = 0; i < AllBalls.length; i++){
    AllBalls[i].move();
  }
}

function drawAll() {
  colorRect(0,0 , canvas.width, canvas.height, 'white');
  for (var i = 0; i < AllBalls.length; i++){
    AllBalls[i].draw();
  }
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

function colorCircle(centerX,centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY, radius, 0,Math.PI*2, true);
    canvasContext.fill();
}
