function parseCount(value) {
	if (isNaN(Number.parseFloat(value))) {
		throw new Error("Невалидное значение")
	} else {
		return Number.parseFloat(value)
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
		if ((a + b < c || b + c < a) || c + a < b) throw new Error(`Треугольник с такими сторонами не существует`);
		else {
			this.sides = [a, b, c];
		}
	}
	get perimeter() {
		return this.sides.reduce((a, b) => a + b);
	}
	set perimeter(value) {
		return value
	}

	get area() {
		const p = this.perimeter / 2;
		return Number((Math.sqrt(p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2]))).toFixed(3));
	}
	set area(value) {
		return value
	}
}

function getTriangle(a, b, c) {
	try {
		let newTriangel = new Triangle(a, b, c);
		return newTriangel;
	} catch (error) {
		newTriangel = {
			area: 'Ошибка! Треугольник не существует',
			perimeter: 'Ошибка! Треугольник не существует'
		};
		return newTriangel
	}
}

