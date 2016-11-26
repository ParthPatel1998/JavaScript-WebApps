var body = document
var billvalue = document.getElementById("bill");
var changevalue = document.getElementById("change");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");
var output4 = document.getElementById("output4");
var output5 = document.getElementById("output5");
var output6 = document.getElementById("output6");
var output7 = document.getElementById("output7");
var output8 = document.getElementById("output8");
var output9 = document.getElementById("output9");
var output10 = document.getElementById("output10");
var output11 = document.getElementById("output11");
var output12 = document.getElementById("output12");
var output13 = document.getElementById("output13");
var output14 = document.getElementById("output14");
var output15 = document.getElementById("output15");
var hun;
var fif;
var twent;
var ten;
var five;
var ton;
var lon;
var qrt;
var dimes;
var nic;
var pen;

body.addEventListener("keypress", fncKeypress);
billvalue.addEventListener("keypress", fncKeypress);
changevalue.addEventListener("keypress", fncKeypress);

function fncKeypress(){
if (event.which === 13){
    GetBills.call();
    GetChange.call();
}
}


function GetBills() {

	var bill = parseFloat(billvalue.value) || 0;
		
        hun = Math.floor(bill/100);
        bill %= 100;
        fif = Math.floor(bill/50);
        bill %= 50;
        twent = Math.floor(bill/20);
        bill %= 20;
        ten = Math.floor(bill/10);
        bill %= 10;
        five = Math.floor(bill/5);
        bill %= 5;
        ton = Math.floor(bill/2);
        bill %= 2;
        lun = Math.floor(bill/1);

    output1.innerHTML = "The minimum number of bills is: ";
    output2.innerHTML = "$100: " + (hun);
    output3.innerHTML = "$50: " + (fif);
    output4.innerHTML = "$20: " + (twent);
    output5.innerHTML = "$10: " + (ten);
    output6.innerHTML = "$5: " + (five);
    output7.innerHTML = "$2: " + (ton);
    output8.innerHTML = "$1: " + (lun);

}



function GetChange() {

    var change = parseFloat(changevalue.value) || 0;
        
        qrt = Math.floor(change/25);
        change %= 25;
        dimes = Math.floor(change/10);
        change %= 10;
        nic = Math.floor(change/5);
        change %= 5;
        pen = Math.floor(change/1);


    output9.innerHTML = "The minimum number of coins is: ";
    output10.innerHTML = "Quarters: " + (qrt);
    output11.innerHTML = "Dimes: " + (dimes);
    output12.innerHTML = "Nickels: " + (nic);
    output13.innerHTML = "Pennies: " + (pen);
}










