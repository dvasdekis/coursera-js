// Default values
function orderChickenWith(sideDish) {
	if (sideDish === undefined) {
	sideDish = "whatever!"
}
	console.log("Chicken with " + sideDish)
}

function orderFishWith(sideDish) {
	// overwrites an undefined value with the OR statement
	sideDish = sideDish || "Clams!"
	console.log("Fish with " + sideDish)
}

orderChickenWith("Noodles");
orderChickenWith();
orderFishWith("Meat!");
orderFishWith();