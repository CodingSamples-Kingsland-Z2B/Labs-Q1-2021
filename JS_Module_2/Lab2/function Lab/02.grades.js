function main(input) {
	console.log(grades(input));
}

function grades(grade) {
	if (grade > 2.0 && grade <= 2.99) {
		return "Fail";
	} else if (grade > 2.99 && grade <= 3.49) {
		return "Poor";
	} else if (grade > 3.49 && grade <= 4.49) {
		return "Good";
	} else if (grade > 4.49 && grade <= 5.49) {
		return "Very good";
	} else if (grade > 5.49 && grade <= 6) {
		return "Excellent";
	}
}

main(3.33);
