function main(restTime, hwPrice, swPrice, frappePrice) {
    let moneySpent = 0;
    moneySpent += hwPrice * 3;
    moneySpent += swPrice * 2;
    moneySpent += frappePrice;

    let timeLeft = restTime;
    timeLeft -= 5;
    timeLeft -= 3 * 2;
    timeLeft -= 2 * 2;

    console.log(`${moneySpent.toFixed(2)}`);
    console.log(`${timeLeft}`);
}