function Student(name, gender, age) {
	this.name = name,
		this.gender = gender,
		this.age = age,
		this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
	if (!(this.marks === undefined)) {
		this.marks.push(...marksToAdd)
	}
}


Student.prototype.getAverage = function () {
	if (this.marks.length > 0) {
		let summ = this.marks.reduce((sum, elem) => sum + elem);
		return summ / (this.marks.length)
	} else {
		return 0
	}
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason
}
