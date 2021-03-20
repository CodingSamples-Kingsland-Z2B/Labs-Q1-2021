function main(numList) {
	let min = Infinity;
	let max = -Infinity;
	let currNum = numList.shift();
	while (currNum != "END" && currNum != undefined) {
		if (currNum > max) {
			max = currNum;
		}
		if (currNum < min) {
			min = currNum;
		}
		currNum = numList.shift();
	}
	console.log(`Min number: ${min}`);
	console.log(`Max number: ${max}`);
}

main([10, 20, 34, "END", 25, 50]);
