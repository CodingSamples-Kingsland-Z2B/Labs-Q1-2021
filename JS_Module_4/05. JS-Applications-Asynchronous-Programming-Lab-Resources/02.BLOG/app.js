function attachEvents() {
	let btnLoadPosts = document.getElementById("btnLoadPosts");
	let myDropdown = document.getElementById("posts");
	let btnViewPost = document.getElementById("btnViewPost");
	let postTitle = document.getElementById("post-title");
	let postBody = document.getElementById("post-body");
	let postComments = document.getElementById("post-comments");

	btnLoadPosts.addEventListener("click", function () {
		console.log("The button has been clicked! ");
		let imAPromise = fetch("https://blog-apps-c12bf.firebaseio.com/posts.json", { method: "GET"}); // I'm a new promise! I have res, reject

		imAPromise
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				// Loop over the data
				for (key in data) {
					console.log(key, data[key].title);
					let tempOption = document.createElement("option");
					tempOption.value = key;
					tempOption.textContent = data[key].title;
					myDropdown.appendChild(tempOption);
				}
			})
			.catch((error) => console.log(error));
	});

	btnViewPost.addEventListener("click", function () {
		postTitle.textContent = "";
		postBody.textContent = "";
		postComments.innerHTML = "";
		console.log(myDropdown.value);
		let thePost = fetch(
			`https://blog-apps-c12bf.firebaseio.com/posts/${myDropdown.value}.json`
		);
		thePost
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				// Inside the response!
				console.log(data);
				postTitle.textContent = data.title;
				postBody.textContent = data.body;
				data.comments.forEach((comment) => {
					let tempLI = document.createElement("li");
					tempLI.textContent = comment.text;
					postComments.appendChild(tempLI);
				});
			})
			.catch((error) => console.log(error));
	});
}
attachEvents();
