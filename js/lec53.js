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

	if (myname === "student") {
		var title =
			document
			.querySelector("#title")
			.textContent;
		title += " & Lovin' it!";
		document
			.querySelector("#title")
			.textContent = title;
	}

}