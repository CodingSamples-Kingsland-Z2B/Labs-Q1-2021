class Cat {
	constructor(name, age) {
		this.meow = () => {
			console.log(`${this.name}, age ${this.age} says Meow`);
		};
		this.name = name;
		this.age = age;
	}
}

function main(arrayOfStrings) {
	let catsArray = [];

	for (let catString of arrayOfStrings) {
		let [catName, catAge] = catString.split(" ");
		let newCat = new Cat(catName, catAge);
		catsArray.push(newCat);
	}

	for (let cat of catsArray) {
		cat.meow();
	}
}

main(["Mellow 2", "Tom 5"]);
