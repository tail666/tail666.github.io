/*var x=438597246979;
x="fail";
if(x!="fail"){
	console.log(x);
} else if(x=="success") {
	console.log("success");
} else {
	console.log("success");
}*/

/*var x=5;
var y=7;
console.log((x+2*y)*(x));*/

/*function addnumbers(a,b){
	console.log(a+b);
}

addnumbers(5,12)*/

function add() {
	var name = $("#name").val();
	var number1 = $("#number1").val();
	var number2 = $("#number2").val();
	var missing = [];
	if(name == "") {
		missing.push("name");
	}
	if(number1 == "") {
		missing.push("number1")
	}
	if(number2 == "") {
		missing.push("number2")
	}

	if(missing.length == 0) {
		var sum = parseInt(number1) + parseInt(number2);
		$("#result").css("color", "black")
		$("#result").html("hi " + name + ", your sum is " + sum);
	} else {
		$("#result").css("color", "red")
		$("#result").html("erro:missing " + missing);
	}
}