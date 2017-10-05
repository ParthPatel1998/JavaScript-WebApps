var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");


for (i = 0; i < items.length; i++){
	items[i].addEventListener("click", editItems);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", updateItemkeypress);
}


function editItems() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function updateItemkeypress() {
	if (event.which === 13) {
	updateItem.call(this);
	}
}


//Head edit box
var headedit = document.getElementById("headedit");
var input = headedit.querySelector("input");

headedit.addEventListener("click", editItems);
input.addEventListener("blur", updateItem);
input.addEventListener("keypress", updateItemkeypress);



//jQuery Way
var counter = 4
var counter2 = 4
$(document).ready(function(){
	$("#btn").click(function(){
		$("#checklist").append('<li><span>Note ' + (counter++) + '</span><input value = "Note ' + (counter2++) + '" /></li>');
	});

// With on(): (jQuery Version of Code)
$("#checklist").on("click", "li", function editItems(){
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
});

$("#checklist").on("blur", "input", function updateItem(){
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
});

$("#checklist").on("keypress", "input", function updateItemkeypress(){
	if (event.which === 13){
		this.previousElementSibling.innerHTML = this.value;
		this.parentNode.className = "";
	}
});
});








