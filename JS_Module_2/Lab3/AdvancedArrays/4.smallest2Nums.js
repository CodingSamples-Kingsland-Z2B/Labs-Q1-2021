function main(arrayOfNums) {
	let sortedArray = arrayOfNums.sort((num1, num2) => num1 - num2);
	let smallest2 = sortedArray.slice(0, 2);

	console.log(smallest2.join(" "));
}

main([30, 15, 5, 50]);

// let smallest2 = [];
// let min = Infinity;
// let index = -1;
// for (let i = 0; i < arrayOfNums.length; i++) {
// 	if (arrayOfNums[i] < min) {
// 		min = arrayOfNums[i];
// 		index = i;
// 	}
// }

// smallest2.push(min);
// arrayOfNums.splice(index, 1);

// min = Infinity;

// for (let i = 0; i < arrayOfNums.length; i++) {
// 	if (arrayOfNums[i] < min) {
// 		min = arrayOfNums[i];
// 	}
// }
// smallest2.push(min);
