function main(stopNum, numList) {
	let prevNum = 0;
	let currNum = numList.shift();
	while (currNum != stopNum) {
		prevNum = currNum;
		currNum = numList.shift();
	}
	//prevNum = prevNum + prevNum *.2;
	//prevNum = prevNum * 1.2;
	prevNum *= 1.2;
	console.log(prevNum);
}

main(25, [20, 30, 25]);
