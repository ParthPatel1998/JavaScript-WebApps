var changevalue = document.getElementById("change");
var output1 = document.getElementById("output1");

changevalue.addEventListener("input", myFunction);

function myFunction(){
    var change = parseFloat(changevalue.value);
	qrt = change/25;
    output1.innerHTML = "The minimum number of coins is: " + (qrt);
}