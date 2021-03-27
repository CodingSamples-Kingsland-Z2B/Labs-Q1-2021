function main(inputArray) {
	for (let i = 0; i < inputArray.length; i++) {
		inputArray[i] = Number(inputArray[i]);
	}

	let evenSum = 0;
	let oddSum = 0;
	/* for(let i=0;inputArray.length;i++){
	    let num = inputArray[i]
        if (num % 2 == 0) {
			evenSum += num;
		} else {
			oddSum += num;
		}
	}*/
	for (let num of inputArray) {
		if (num % 2 == 0) {
			evenSum += num;
		} else {
			oddSum += num;
		}
	}
	let difference = evenSum - oddSum;
	console.log(difference);
}

main(["2", "4", "6", 8, 10]);
