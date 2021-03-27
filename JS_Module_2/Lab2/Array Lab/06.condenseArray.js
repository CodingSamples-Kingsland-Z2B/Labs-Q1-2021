function main(arrayOfnums) {
	//let condensedArr = [];

	while (arrayOfnums.length != 1) {
		let condensedArr = [];
		for (let i = 1; i < arrayOfnums.length; i++) {
			condensedArr.push(arrayOfnums[i - 1] + arrayOfnums[i]);
		}
		//conensed array ==> [12,13];
		arrayOfnums = condensedArr;
		//console.log(condensedArr);
		//conensed array ==> [5,4,5,3];
	}

	console.log(arrayOfnums[0]);
}

main([2, 10, 3]);
main([5, 0, 4, 1, 2]);
