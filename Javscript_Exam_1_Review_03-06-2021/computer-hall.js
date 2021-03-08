function main(month, hours, people, timeOfDay) {
    let baseRate = 0;
    switch (month) {
        case "March":
        case "April":
        case "May":
            if (timeOfDay == "day") {
                baseRate = 10.50;
            }
            else { // "night"
                baseRate = 8.40;
            }
            break;
        case "June":
        case "July":
        case "August":
            if (timeOfDay == "day") {
                baseRate = 12.60;
            }
            else { // "night"
                baseRate = 10.20;
            }
            break;
        default:
            console.log("Unknown month");
            return;
    }

    if (people >= 4) {
        baseRate *= 0.9;
    }
    if (hours >= 5) {
        baseRate *= 0.5;
    }

    console.log(`Price per person for one hour: ${baseRate.toFixed(2)}`);
    console.log(`Total cost of the visit: ${(baseRate * people * hours).toFixed(2)}`);
}