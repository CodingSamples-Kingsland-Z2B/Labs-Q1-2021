function main(width, length, height, computers) {
    let volume = width * length * height;
    let numberOfSteps = computers.length;
    for (let i = 0; i < numberOfSteps; i++) {
        let computersStep = computers.shift();
        if (computersStep == "Done") {
            console.log(`${volume} Cubic meters left.`);
            return;
        }
        else {
            volume -= computersStep;
            if (volume < 0) {
                console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
                return;
            }
        }
    }
}

main(10, 10, 2, [20,20,20,20,122]);