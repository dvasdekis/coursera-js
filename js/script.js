var message = "In global scope";
console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);
}

a();