function main(numOfItems, arrayOfNums) {
	let numDivBy2 = 0;
	let numDivBy3 = 0;
	let numDivBy4 = 0;

	for (let i = 0; i < numOfItems; i++) {
		let currNum = arrayOfNums.shift();
		if (currNum % 2 == 0) {
			//divible by 2
			numDivBy2++;
		}
		if (currNum % 3 == 0) {
			//divible by 3
			numDivBy3++;
		}
		if (currNum % 4 == 0) {
			//divible by 4
			numDivBy4++;
		}
	}
	// percentDiv2 ==  # of times the number is devied evenly into  / numOfItems *100
	let percentDiv2 = (numDivBy2 / numOfItems) * 100;
	let percentDiv3 = (numDivBy3 / numOfItems) * 100;
	let percentDiv4 = (numDivBy4 / numOfItems) * 100;
	console.log(`${percentDiv2.toFixed(2)}%`);
	console.log(`${percentDiv3.toFixed(2)}%`);
	console.log(`${percentDiv4.toFixed(2)}%`);
}

//main(3, [3, 6, 9]);
main(3, [4, 6, 3]);
