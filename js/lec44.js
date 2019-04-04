// Default values
function orderChickenWith(sideDish) {
	if (sideDish === undefined) {
	sideDish = "whatever!"
}
	console.log("Chicken with " + sideDish)
}

function orderFishWith(sideDish) {
	sideDish = sideDish || "Whatever!"
}
	console.log("Fish with " + sideDish)
}

orderChickenWith("Noodles");
orderChickenWith();
orderFishWith();