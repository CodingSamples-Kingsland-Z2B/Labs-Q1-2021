function main(floorCount, numOfRooms) {
	for (let currentFloor = floorCount; currentFloor > 0; currentFloor--) {
		let floorMap = "";
		for (let currentRoom = 0; currentRoom < numOfRooms; currentRoom++) {
			if (currentFloor == floorCount) {
				floorMap += `L${currentFloor}${currentRoom} `;
			} else if (currentFloor % 2 === 0) {
				floorMap += `O${currentFloor}${currentRoom}  `;
			} else {
				floorMap += `A${currentFloor}${currentRoom}  `;
			}
		}
		console.log(floorMap);
	}
}

main(10, 7);
