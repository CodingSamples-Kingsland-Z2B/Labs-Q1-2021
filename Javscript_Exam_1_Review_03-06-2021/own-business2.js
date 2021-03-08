function main(width, length, height, computers) {
    let volumeAvailable = width * length * height;
    let volumeUsed = 0;

    let comp = computers.shift();
    while (comp != "Done" && comp != undefined) {
        volumeUsed += comp;
        if (volumeUsed > volumeAvailable) {
            break;
        }
        comp = computers.shift();
    }

    if (volumeUsed < volumeAvailable) {
        console.log(`${volumeAvailable - volumeUsed} Cubic meters left.`);
    }
    else {
        console.log(`No more free space! You need ${volumeUsed - volumeAvailable} Cubic meters more.`);
    }
}

main(10, 10, 2, [20,20,20,20,122]);