function main(n1, n2, n3) {
	let negativeNums = 0;
	if (n1 < 0) {
		negativeNums++; // negativeNums = negativeNums +1
	}
	if (n2 < 0) {
		negativeNums++; // negativeNums = negativeNums +1
	}
	if (n3 < 0) {
		negativeNums++;
	}

	if (n1 != 0 && n2 != 0 && n3 != 0) {
		if (negativeNums % 2 === 0) {
			//even
			console.log("Positive");
		} else {
			console.log("Negative");
		}
	} else {
		console.log("Zero");
	}
	// odd amount of negitive number then the result  == negative
	// 1* -1 = -1
	// even amount of negitive numbers then == positive
}

//main(2, 3, -1);

//main(-4, -5, 1);

main(0, 3, 4);

// function mult(n1,n2,n3){
//     let product = n1*n2*n3;
//     if(product == 0){
//         console.log("Zero");
//     }else if(product >0){
//         console.log("Positive");
//     }else{
//         console.log("Negtive");
//     }

// }

// function main(n1, n2, n3) {
// 	let negativeNums = 0;
// 	if (n1 < 0) {
// 		negativeNums++; // negativeNums = negativeNums +1
// 	}
// 	if (n2 < 0) {
// 		negativeNums++; // negativeNums = negativeNums +1
// 	}
// 	if (n3 < 0) {
// 		negativeNums++;
// 	}

// 	  if(n1 == 0 || n2 ==0 || n3 == 0){
// 	    console.log("Zero");
// 	    }else if (negativeNums % 2 === 0) {
// 			//even
// 			console.log("Positive");
// 		} else {
// 			console.log("Negative");
// 		}

// 	// odd amount of negitive number then the result  == negative
// 	// 1* -1 = -1
// 	// even amount of negitive numbers then == positive
// }
