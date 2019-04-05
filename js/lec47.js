//Passing by reference vs by value

var a = 7;
var b = a;
function printab (x, y) {
	console.log("a: " + x);
	console.log("b: " + y);
}
printab(a,b);

b = 5
console.log("After b update?");
printab(a,b);