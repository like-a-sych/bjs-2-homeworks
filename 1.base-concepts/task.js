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