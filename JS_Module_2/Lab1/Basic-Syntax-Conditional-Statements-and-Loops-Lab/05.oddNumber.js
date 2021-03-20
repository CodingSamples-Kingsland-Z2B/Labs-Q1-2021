// function main(numOfOddNums) {
// 	let sum = 0;
// 	let oddNum = 1;
// 	for (let i = 1; i <= numOfOddNums; i++) {
// 		console.log(oddNum);
// 		sum += oddNum;
// 		oddNum += 2; //oddNum = oddNum+2;
// 	}
// 	console.log(`Sum: ${sum}`);
// }

function main(numOfOddNums) {
	let sum = 0;

	for (let i = 1; i <= numOfOddNums * 2; i += 2) {
		console.log(i);
		sum += i;
	}
	console.log(`Sum: ${sum}`);
}
main(10);
/* 
    1
    3
    5
    7
    9
    Sum: 25
 */
