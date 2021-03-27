function main(base, powOf) {
	let output = powerOf(base, powOf);
	console.log(output);
}

function powerOf(num, pow) {
	return Math.pow(num, pow);
	// return num** pow;
	//for loop here;
}

main(3, 4);
