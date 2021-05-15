// function populationsInTown(arrOfStrings) {
// 	let popCount = {};
// 	const toRemove = /\<-> | \<-> /gm;

// 	for (place of arrOfStrings) {
// 		let tempPlaceArr = place.replace(toRemove, "  ").split("  ");
// 		if (!popCount[tempPlaceArr[0]]) {
// 			popCount[tempPlaceArr[0]] = Number(tempPlaceArr[1]);
// 		} else {
// 			popCount[tempPlaceArr[0]] += Number(tempPlaceArr[1]);
// 		}
// 	}
//   console.log("I'm pop count", popCount)
// 	for (let key of Object.keys(popCount)) {
// 		console.log(`${key}: ${popCount[key]}`);
// 	}
// }

// populationsInTown([
// 	"Sydney<-> 1200000",
// 	"Montana <-> 20000",
// 	"New York <-> 10000000",
// 	"Washington <-> 2345000",
// 	"Las Vegas <-> 1000000",
// ]);

// populationsInTown([
// 	"Istanbul <-> 100000",
// 	"Honk Kong <-> 2100004",
// 	"Jerusalem <-> 2352344",
// 	"Mexico City <-> 23401925",
// 	"Istanbul <-> 1000",
// ]);


 function main(input) {
    let splitArray = []
    let townInfo = {}
    let [town, population] = []
    for(let i = 0; i < input.length; i++) {
    splitArray.push(input[i].split("<->"))
    }
        for([town, population] of splitArray) {
          console.log("town ", town, "pop ", population)
            townInfo[town] = Number(population)
        }
        console.log(townInfo)
}
main(['Sydney <-> 1200000','Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000','Montana <-> 20000'])