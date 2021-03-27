function main(array1, array2) {
	//bool = arr === arr2; <-- CANT DO THIS!!!!
	//console.log(bool);
	let isEqual = true;
	let sum = 0;
	for (let i = 0; i < array1.length; i++) {
		sum += Number(array1[i]);
		if (array1[i] != array2[i]) {
			//print the false message
			console.log(
				`Arrays are not identical. Found difference at ${i} index`
			);
			isEqual = false;
			break;
		}
	}
	if (isEqual) {
		//print the true message
		console.log(`Arrays are identical. Sum: ${sum}`);
	}
}
main(["10", "20", "30"], ["10", "20", "30"]);
main(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
