//DOM Manipulation
//console.log(document.getElementById("title"));

function sayHello () {
	var myname = 
	document.getElementById("name").value;
	var message = "Hello " + myname + "!";

	document
		.getElementById("content")
		.textConent = message;
}