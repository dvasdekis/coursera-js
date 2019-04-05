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
console.log(multiply.version);

//Function factory
function makeMultiplier(multiplier) {
	var myfunc = function(x) {;
	return multiplier * x;
	}

	return myfunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));