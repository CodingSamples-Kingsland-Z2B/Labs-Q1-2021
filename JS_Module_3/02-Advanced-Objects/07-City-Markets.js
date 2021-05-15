function main(cityArray) {
let finalCount = {};

for(cityInfo of cityArray) {
   
    let [town, product, countPrice] = cityInfo.split(" -> ")
    let [count, price] = countPrice.split(" : ")
        if(!finalCount[town]) {
            finalCount[town] = {} 
            
        }  
         if (!finalCount[town][product]) {
            finalCount[town][product] = +count * +price
        }
           
        
    
}
for(town in finalCount) {
    console.log(`Town - ${town}`)
    for(const [key, value] of Object.entries(finalCount[town])) {
         console.log(`$$$${key} : ${value}`)
    }   
}
}

// John's version

// function main(input) {
// 	let regex = /[A-z]+\s[\w]+|[A-z]+|\d+.\d+|\d+/gim;
// 	let cityPop = input.toString().match(regex);
// 	let newCities = [];
// 	console.log(cityPop);
// 	let newArray = [];
// 	// let regexFirst = /\w+/g;
// 	//let regexSecond = /\w+\s\w+|\w+/g;
// 	for (j = 0; j < cityPop.length; j++) {
// 		let cost = Number(cityPop[j + 2]) * Number(cityPop[j + 3]);
// 		if (!newCities.includes(cityPop[j])) {
// 			console.log(`Town-${cityPop[j]}`);
// 			console.log(`$$$${cityPop[j + 1]}: ${cost}`);
// 			newCities.push(cityPop[j]);
// 			j += 3;
// 		} else {
// 			console.log(`$$$${cityPop[j + 1]}: ${cost}`);
// 			j += 3;
// 		}
// 	}
// }




  main(["Sydney -> Laptops HP -> 200 : 2000", "Sydney -> Raspberry -> 200000 : 1500", "Sydney -> Audi Q7 -> 200 : 100000", "Montana -> Portokals -> 200000 : 1", "Montana -> Qgodas -> 20000 : 0.2", "Montana -> Chereshas -> 1000 : 0.3"])