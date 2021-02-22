function main(figureType, figureSize) {
	let area = 0;
	if (figureType === "square") {
		area = figureSize * figureSize;
	} else if (figureType === "circle") {
		// pi r ^2 => pi *r *r
		area = Math.PI * figureSize * figureSize;
	}
	console.log(area.toFixed(2));
}

main("square", 5);
main("circle", 5);
