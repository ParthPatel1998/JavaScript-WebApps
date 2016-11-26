var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  
  addSum.innerHTML = (one+two);
}

var numOnee = document.getElementById("num-onee");
var numTwoo = document.getElementById("num-twoo");
var subSum = document.getElementById("sub-sum");

numOnee.addEventListener("input", subtract);
numTwoo.addEventListener("input", subtract);

function subtract() {
  var onee = parseFloat(numOnee.value) || 0;
  var twoo = parseFloat(numTwoo.value) || 0;
  
  subSum.innerHTML = (onee-twoo);
}


var numOneee = document.getElementById("num-oneee");
var numTwooo = document.getElementById("num-twooo");
var mult = document.getElementById("multy");

numOneee.addEventListener("input", multiply);
numTwooo.addEventListener("input", multiply);

function multiply() {
  var oneee = parseFloat(numOneee.value) || 0;
  var twooo = parseFloat(numTwooo.value) || 0;
  
  mult.innerHTML = (oneee*twooo);
}

var numOneeee = document.getElementById("num-oneeee");
var numTwoooo = document.getElementById("num-twoooo");
var divd = document.getElementById("div");

numOneeee.addEventListener("input", div);
numTwoooo.addEventListener("input", div);

function div() {
  var oneeee = parseFloat(numOneeee.value) || 0;
  var twoooo = parseFloat(numTwoooo.value) || 0;
  
  divd.innerHTML = (oneeee/twoooo);
}



