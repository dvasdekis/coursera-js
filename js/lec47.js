//Passing by reference vs by value
function printab (x, y) {
	console.log("a: " + x);
	console.log("b: " + y);
}

console.log("Passing by value");
var a = 7;
var b = a;
printab(a,b);
b = 5
console.log("After b update?");
printab(a,b);

console.log("Passing by reference");
var c = {x: 7};
var d = c;
printab(c,d);

d.x = 5;
console.log("After b update?");
printab(c,d);