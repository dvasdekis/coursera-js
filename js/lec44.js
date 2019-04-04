// Default values
function orderChickenWith(sideDish) {
	if (sideDish === undefined) {
	sideDish = "whatever!"
}
	console.log("Chicken with " + sideDish)
}

orderChickenWith("Noodles");
orderChickenWith();
