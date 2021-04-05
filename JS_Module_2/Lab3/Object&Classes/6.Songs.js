class Song {
	constructor(type, name, time) {
		this.type = type;
		this.name = name;
		this.time = time;
	}
}

function main(infoArray) {
	let numOfsongs = infoArray.shift();
	let lookUpType = infoArray.pop();

	let songList = [];

	for (let i = 0; i < numOfsongs; i++) {
		let currSongInfo = infoArray[i].split("_");
		// currSongInfo =["favourite","DownTown","3:14"];
		let [songType, songName, songTime] = currSongInfo;
		let songObj = new Song(songType, songName, songTime);
		songList.push(songObj);
	}

	// //print out songs only of the given type (type == lookUpType)
	// let filterSongList = songList.filter(function (songObj) {
	// 	return songObj.type == lookUpType || lookUpType == "all";
	// });

	// for (let song of filterSongList) {
	// 	console.log(song.name);
	// }

	for (let song of songList) {
		if (song.type == lookUpType || lookUpType == "all") {
			console.log(song.name);
		}
	}
}

main([
	3,
	"favourite_DownTown_3:14",
	"rock_Kiss_4:16",
	"favourite_Smooth Criminal_4:01",
	"favourite",
]);

// main([
// 	4,
// 	"favourite_DownTown_3:14",
// 	"listenLater_Andalouse_3:24",
// 	"favourite_In To The Night_3:58",
// 	"favourite_Live It Up_3:48",
// 	"listenLater",
// ]);

//main([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
