function getArrayParams(...arr) {
	let min, max, sum, avg;
	if (arr.length > 0) {
		function findArgs(arr) {
			min = Infinity;
			max = -Infinity;
			sum = 0;
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] > max) {
					max = arr[i];
				}
				if (arr[i] < min) {
					min = arr[i];
				}
				sum += arr[i];
			}
			avg = Number((sum / arr.length).toFixed(2));
			return { min: min, max: max, avg: avg };
		}
		return findArgs(arr);
	} else {
		return 0;
	}
}

function summElementsWorker(...arr) {
	if (arr.length > 0) {
		const sumEl = arr.reduce(function (currentSum, currentNumber) {
			return currentSum + currentNumber
		}, 0)
		return sumEl;
	} else {
		return 0;
	}
}

function differenceMaxMinWorker(...arr) {
	let diff = 0;
	if (arr.length > 0) {
		let min = Math.min(...arr);
		let max = Math.max(...arr);
		diff = max - min;
		return diff;
	} else {
		return diff
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i]
			}
		}
		let diff = sumEvenElement - sumOddElement;
		return diff;
	} else {
		return 0;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		return sumEvenElement / countEvenElement;
	} else {
		return 0;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let max = func(...arrOfArr[i]);
		console.log(max)
		if (max > maxWorkerResult) {
			maxWorkerResult = max;
		}
	}
	return maxWorkerResult;
}
