//DOM Manipulation
//console.log(document.getElementById("title"));

function sayHello () {
	var myname = 
	document.getElementById("name").value;
	var message = "<h2>Hello " + myname + "!</h2>";

	// document
	// 	.getElementById("content")
	// 	.textContent = message;

	document
	.getElementById("content")
	.innerHTML = message;

}