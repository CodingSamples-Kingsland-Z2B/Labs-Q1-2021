function main(distance, gasConsumption, gasPrice, prize) {
    let participants = 5;

    let moneyNeeded = distance * (gasConsumption / 100) * gasPrice;
    let moneyRemaining = prize - moneyNeeded;
    if (prize >= moneyNeeded) {
        console.log(`You can go home. ${moneyRemaining.toFixed(2)} money left.`);
    }
    else { // <
        let prizePerParticipant = (prize / participants).toFixed(2);
        console.log(`Sorry, you cannot go home. Each will receive ${prizePerParticipant} money.`);
    }
}
