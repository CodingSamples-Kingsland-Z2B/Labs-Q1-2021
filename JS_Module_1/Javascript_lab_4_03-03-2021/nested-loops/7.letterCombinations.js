function main(startLetter, endLetter, skipLetter) {
	let count = 0;
	let startNum = startLetter.charCodeAt(0);
	let endNum = endLetter.charCodeAt(0);
	let skipNum = skipLetter.charCodeAt(0);
	for (let n1 = startNum; n1 <= endNum; n1++) {
		for (let n2 = startNum; n2 <= endNum; n2++) {
			for (let n3 = startNum; n3 <= endNum; n3++) {
				if (n1 != skipNum && n2 != skipNum && n3 != skipNum) {
					console.log(
						String.fromCharCode(n1) +
							String.fromCharCode(n2) +
							String.fromCharCode(n3)
					);
					count++;
				}
			}
		}
	}
	console.log(count);
}
// "a"+1 =>> 'a1'A
main("a", "c", "b");
