function parseCount(value) {

	let result = Number.parseFloat(value);
	if (isNaN(result)) {
		throw new Error("Невалидное значение")
	} else {
		return result;
	}
}

function validateCount(value) {
	try {
		return parseCount(value)
	} catch (error) {
		return error
	}
}


class Triangle {
	constructor(a, b, c) {
		if ((a + b < c || b + c < a) || c + a < b) {
			throw new Error(`Треугольник с такими сторонами не существует`);
		}
		else {
			this.sides = [a, b, c];
		}
	}
	get perimeter() {
		return this.sides.reduce((a, b) => a + b);
	}

	get area() {
		const p = this.perimeter / 2;
		return Number((Math.sqrt(p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2]))).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует'
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует'
			}
		};

	}
}

