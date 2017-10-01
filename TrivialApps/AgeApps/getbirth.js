var year = new Date().getFullYear();
var BYear = document.getElementById("BYear");
var age_val = document.getElementById("year2");

function GetBYear() {
  var age = parseFloat(age_val.value) || 0;
  BirthYear = year - age;
  if (BirthYear >= 0) {
  	BYear.innerHTML = BirthYear;
  }
  else {
  	  	BYear.innerHTML = (BirthYear * -1) + " BC";
  }  
};
