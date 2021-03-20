function main(n, computers) {
    let sales = 0;
    let totalRating = 0;

    for (let i = 0; i < n; i++) {
        let comp = computers.shift();
        let rating = comp % 10;
        let possibleSales = Math.floor(comp / 10);

        totalRating += rating;
        switch (rating) {
            case 3:
                sales += possibleSales * 0.5;
                break;
            case 4:
                sales += possibleSales * 0.7;
                break;
            case 5:
                sales += possibleSales * 0.85;
                break;
            case 6:
                sales += possibleSales;
                break;
        }
    }

    let avgRating = totalRating / n;

    console.log(sales.toFixed(2));
    console.log(avgRating.toFixed(2));
}