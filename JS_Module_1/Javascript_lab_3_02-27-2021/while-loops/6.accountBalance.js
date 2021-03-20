function main(incExpeceList) {
	let balance = 0;
	let currBalChange = incExpeceList.shift();
	while (currBalChange != "End" && currBalChange != undefined) {
		if (currBalChange > 0) {
			//increase

			console.log(`Increase: ${currBalChange.toFixed(2)}`);
		} else if (currBalChange < 0) {
			//decrease

			console.log(`Decrease: ${Math.abs(currBalChange).toFixed(2)}`);
		}
		balance += currBalChange;
		currBalChange = incExpeceList.shift();
	}
	console.log("Balance: " + balance.toFixed(2));
}

main([500, 15.5, -80.35, "End"]);
