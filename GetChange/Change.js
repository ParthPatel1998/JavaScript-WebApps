var body = document
var changevalue = document.getElementById("change");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");
var output4 = document.getElementById("output4");
var output5 = document.getElementById("output5");
var qrt;
var dimes;
var nic;
var pen;

body.addEventListener("keypress", fncKeypress);
changevalue.addEventListener("keypress", fncKeypress);

function fncKeypress() {
if (event.which === 13){
    GetChange.call();
    }
}

function GetChange(){

	var change = parseFloat(changevalue.value) || 0;
        qrt = Math.floor(change/25);
    	change %= 25;
        dimes = Math.floor(change/10);
    	change %= 10;
        nic = Math.floor(change/5);
    	change %= 5;
        pen = Math.floor(change/1);

    output1.innerHTML = "The minimum number of coins is: ";
    output2.innerHTML = "Quarters: " + (qrt);
    output3.innerHTML = "Dimes: " + (dimes);
    output4.innerHTML = "Nickels: " + (nic);
    output5.innerHTML = "Pennies: " + (pen);
}
