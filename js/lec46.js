//Functions are first-class data types
// Whatever you do with a datatype, 
// you can do with a function
// Functions are objects in JS!

function multiply(x, y) {
	return x * y;
}

console.log(multiply(5,3));
multiply.version = "v1.6.9"
console.log(multiply);