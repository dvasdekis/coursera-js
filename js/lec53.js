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

	// putting in an easter egg
	if (myname === "student") {
		//Get the existing title using a CSS-style 
		// query selector
		var title =
			document
			.querySelector("h1")
			.textContent;
		// Amend some extra text to whatever returns
		title += " & Lovin' it!";
		// Set the title to the new amended string
		document
			.querySelector("h1")
			.textContent = title;
	}

}