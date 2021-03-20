function main(inputNum) {
	let dupNum = inputNum; //23
	let isSpecial = true;
	while (dupNum != 0) {
		let digit = dupNum % 10; //3
		if (digit != 0) {
			if (inputNum % digit != 0) {
				isSpecial = false;
				break;
			}
		}
		//204 => 20 => 2
		dupNum = Math.floor(dupNum / 10); // pasrseInt() -- Math.trunc()
	}
	if (isSpecial) {
		console.log(`${inputNum} is special`);
	} else {
		console.log(`${inputNum} is not special`);
	}
}

main(23);
main(204);
