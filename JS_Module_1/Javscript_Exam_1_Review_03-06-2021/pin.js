function main(firstLimit, secondLimit, thirdLimit) {
    for (let firstDigit = 2; firstDigit <= firstLimit; firstDigit += 2) {
        for (let secondDigit = 2; secondDigit <= secondLimit; secondDigit++) {
            if (secondDigit == 2 || secondDigit == 3 || secondDigit == 5 || secondDigit == 7) {
                for (let thirdDigit = 2; thirdDigit <= thirdLimit; thirdDigit += 2) {
                    console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
                }
            }
        }
    }
}