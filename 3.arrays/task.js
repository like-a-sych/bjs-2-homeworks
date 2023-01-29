function compareArrays(arr1, arr2) {
	return result = arr1.length === arr2.length && arr1.every((element, index) => element == arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	if (users.length > 0 && (gender == "мужской" || gender == "женский")) {
		let resultArr = users.filter(function (arr) {
			return arr.gender == gender;
		});

		let resultSum = resultArr.reduce(function (sum, num) {
			return summ = sum + num.age;
		}, 0)
		return resultSum / resultArr.length
	} else {
		return 0
	}
}
