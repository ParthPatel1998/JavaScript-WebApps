var year = new Date().getFullYear();
var ageval = document.getElementById("age2");
var BYear_val = document.getElementById("year");

function GetAge() {
  var BYear = parseFloat(BYear_val.value) || 0;
  Age2 = year - BYear;
  ageval.innerHTML = Age2;
};