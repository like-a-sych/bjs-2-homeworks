"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let diskriminant = Math.pow(b, 2) - 4 * a * c;
	if (diskriminant > 0) {
		let root1 = (-b + Math.sqrt(diskriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(diskriminant)) / (2 * a);
		arr = [root1, root2];
	} else if (diskriminant === 0) {
		let root = -b / (2 * a);
		arr = [root];
	}
	return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let totalAmount;
	let args = [percent, contribution, amount, countMonths];
	for (let i = 0; i < args.length; i++) {
		if (!(!isNaN(parseFloat(args[i])) && isFinite(args[i]))) {
			totalAmount = false;
			return totalAmount;
		}
	}
	if (!(totalAmount == false)) {
		let S = amount - contribution;
		let n = countMonths;
		let P = percent;
		let monthlyPayment = S * ((P / 12 / 100) + ((P / 12 / 100) / (((1 + (P / 12 / 100)) ** n) - 1)));
		totalAmount = Number((monthlyPayment * n).toFixed(2));
		return totalAmount;
	}
}