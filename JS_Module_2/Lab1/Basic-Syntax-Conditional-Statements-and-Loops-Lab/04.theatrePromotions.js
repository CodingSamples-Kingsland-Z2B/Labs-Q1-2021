function main(typeOfDay, custAge) {
	switch (typeOfDay) {
		case "Weekday":
			//custAge check
			if (
				(custAge >= 0 && custAge <= 18) ||
				(custAge > 64 && custAge <= 122)
			) {
				console.log("12$");
			} else if (custAge > 18 && custAge <= 64) {
				console.log("18$");
			} else {
				console.log("Error!");
			}
			break;
		case "Weekend":
			//custAge check
			if (custAge >= 0 && custAge <= 18) {
				console.log("15$");
			} else if (custAge > 18 && custAge <= 64) {
				console.log("20$");
			} else if (custAge > 64 && custAge <= 122) {
				console.log("15$");
			} else {
				console.log("Error!");
			}
			break;
		case "Holiday":
			//custAge check
			if (custAge >= 0 && custAge <= 18) {
				console.log("5$");
			} else if (custAge > 18 && custAge <= 64) {
				console.log("12$");
			} else if (custAge > 64 && custAge <= 122) {
				console.log("10$");
			} else {
				console.log("Error!");
			}
			break;
	}
}

//main("Weekday", 42); //18$
