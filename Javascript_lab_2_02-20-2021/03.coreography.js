// 1. make the main funciton
// 2. read the inputs
// 3. read the propt
// 3.1 Make notes on important things
function main(numSteps, numDancers, numDays) {
	//distribute steps between dacers ==> steps/ dancers
	// all steps must be learned in the timeline
	//Dancers(all together) can only learn up to 13% of the total steps per day.
	// find out the % each dancer memorizes

	let percentOfStepsPerDay = Math.ceil((numSteps / numDays / numSteps) * 100);
	let percentStepsPerDancer = percentOfStepsPerDay / numDancers;
	// percent .13 *100 => 13

	//if(total percentage of the steps is less than or equal to 13%,
	if (percentOfStepsPerDay <= 13) {
		//print "Yes, they will succeed in that goal! {the percent of steps which every dancer should memorize per day}%."
		console.log(
			`Yes, they will succeed in that goal! ${percentStepsPerDancer.toFixed(
				2
			)}%.`
		);
	} else {
		//else
		//print "No, they will not succeed in that goal! Required {the percent of steps which every dancer should memorize per day}% steps to be learned per day."
		console.log(
			`No, they will not succeed in that goal! Required ${percentStepsPerDancer.toFixed(
				2
			)}% steps to be learned per day.`
		);
	}

	//.toFixed(2)
}

main(55555, 30, 7);
