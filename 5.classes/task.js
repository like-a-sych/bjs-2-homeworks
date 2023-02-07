class PrintEditionItem {

	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}
	get state() {
		return this._state
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} if (value > 100) {
			this._state = 100;
		} else
			this._state = value;
	}
	fix() {
		return this.state *= 1.5;
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		super(name, releaseDate, pagesCount, state, type);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
		super(name, releaseDate, pagesCount, state, type);
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "novel";
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "detective";
	}
}

class Library {
	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		} else console.log(
			'не запушил'
		)
	}
	findBookBy(type, value) {
		let search = this.books.find(function (element) {
			return element[type] == value
		});
		if (search == undefined) {
			return null
		} else return search;
	};
	giveBookByName(bookName) {
		let findBook = this.books.find(function (element) {
			return element.name == bookName
		});
		let getBook = this.books.filter(function (element) {
			return element.name !== bookName
		});
		if (findBook === undefined) {
			return null
		} else {
			this.books = getBook;
			return findBook;
		}
	}
}
