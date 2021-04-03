function main(arrOfNums) {
	let result = [];
	result = arrOfNums.filter((num, index) => {
		//return index % 2 == 1;
		if (index % 2 == 1) {
			return true;
		} else {
			return false;
		}
	});
	result = result.map(function (num) {
		return num * 2;
	});
	result.reverse();

	console.log(result.join(" "));
}
main([3, 0, 10, 4, 7, 3]);
//[10, 15, 20, 25]
