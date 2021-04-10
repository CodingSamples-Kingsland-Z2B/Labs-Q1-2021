function main(studentInfo) {
	let gradebook = new Map();

	for (let student of studentInfo) {
		let grades = student.split(" ");
		let studentName = grades.shift();
		grades = grades.map(Number);

		if (gradebook.has(studentName)) {
			let currGrades = gradebook.get(studentName);
			let newGrades = currGrades.concat(grades);
			gradebook.set(studentName, newGrades);
		} else {
			gradebook.set(studentName, grades);
		}
	}

	let sorted = Array.from(gradebook).sort((student1, student2) => {
		return average(student1[1]) - average(student2[1]);
	});

	for (let [name, grades] of sorted) {
		console.log(`${name}: ${grades.join(", ")}`);
	}
}

function average(grades) {
	let sum = 0;
	for (let grade of grades) {
		sum += grade;
	}
	let avg = sum / grades.length;
	return avg;
}

main(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
