function main(n1, n2, n3) {
	// n1 n2 n3
	// 3  2  1 Descending
	// 1  2  3 Ascending
	if (n1 < n2 && n2 < n3) {
		console.log("Ascending");
	} else if (n1 > n2 && n2 > n3) {
		console.log("Descending");
	} else {
		console.log("Not sorted");
	}
}

//main(3, 2, 1);

main(3, 1, 2);
