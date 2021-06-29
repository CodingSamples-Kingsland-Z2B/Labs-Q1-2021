// CATCH LOG ELEMENTS
let catchesDIV = document.getElementById('catches');
let loadButton = document.getElementsByClassName("load")[0];
let addButton = document.querySelector("button.add");
let catchDIVS = document.getElementsByClassName('catch');
//console.log(catchDIVS);
//let addFormElements = document.getElementById('addForm').querySelectorAll("* input");
let tempFields = document.querySelectorAll('#addForm > input');
//let tempFields2 = addFormElements.querySelectorAll("* input")
let [angler, weight, species, locationCaught, bait, captureTime] = tempFields;

console.log(angler.value, weight.value, species.value, locationCaught, bait, captureTime);
console.log(tempFields);

// Event Listeners

loadButton.addEventListener('click', loadCatches);

addButton.addEventListener('click', addCatch)


// Load catches and return parsed JSON

async function fetchCatches() {
  const response = await fetch("https://fisher-game.firebaseio.com/catches/.json");

  if (!response.ok) {
    const message = `Some error, ${response.status}`;
    throw new Error(message);
  }
  const catches = await response.json();
 
  return catches;
}


  // Loop over all the items in the object, create the html

async function loadCatches() {
  console.log("Load catches button clicked");
  let catchesHTML = ``;
  let fetchedCatches = await fetchCatches();
  console.log("fetched catches are ", fetchedCatches);
  for (const key in fetchedCatches) {
    console.log(fetchedCatches[key] );

    catchesHTML += `<div class="catch" data-id="${key}">
              <label>Angler</label>
              <input type="text" class="angler" value="${fetchedCatches[key].angler}" />
              <hr>
              <label>Weight</label>      
              <input type="number" class="weight" value="${fetchedCatches[key].weight}" />
              <hr>
              <label>Species</label>
              <input type="text" class="species" value="${fetchedCatches[key].species}" />
              <hr>
              <label>Location</label>
              <input type="text" class="location" value="${fetchedCatches[key].location}" />
              <hr>
              <label>Bait</label>
              <input type="text" class="bait" value="${fetchedCatches[key].bait}" />
              <hr>
              <label>Capture Time</label>
              <input type="number" class="captureTime" value="${fetchedCatches[key].captureTime}" />
              <hr>
              <button class="update">Update</button>
              <button class="delete">Delete</button>
          </div>`
  }

  catchesDIV.innerHTML = catchesHTML;
  makeCatchListeners();

}

// Add a new catch and reload the catches

async function addCatch() {
  console.log("Add catch was clicked");

  var newCatch = JSON.stringify({
    angler: angler.value,
    bait:bait.value,
    captureTime: captureTime.value,
    location: locationCaught.value,
    species: species.value,
    weight:weight.value});


  await fetch("https://fisher-game.firebaseio.com/catches/.json", {method: "POST", body: newCatch})
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    loadCatches();
}

function makeCatchListeners() {
  //console.log("Make catch listeners", catchDIVS);

  Object.entries(catchDIVS).forEach( (aCatch) => { // Loop over each update button
    let tempUpdateButton = aCatch[1].children[18]; // turn button element into variable
    tempUpdateButton.addEventListener('click', updateCatch); // add event listener to each button

  })
}

async function updateCatch(e) {
  console.log("updateCatch invoked! ", this)
  let catchID = e.target.parentElement.getAttribute('data-id');
  console.log(catchID);
  let tempUpdateFields = Object.values(e.target.parentElement.children);
  console.log(tempUpdateFields)
  let tempAngler = tempUpdateFields[1];
  let tempWeight = tempUpdateFields[4];
  let tempSpecies = tempUpdateFields[7];
  let tempLocationCaught = tempUpdateFields[10];
  let tempBait = tempUpdateFields[13];
  let tempTime = tempUpdateFields[16];
  //console.log(tempAngler, tempBait, tempWeight, tempSpecies, tempLocationCaught, tempTime)

  var updatedCatch = JSON.stringify({
    angler: tempAngler.value,
    bait: tempBait.value,
    captureTime: tempTime.value,
    location: tempLocationCaught.value,
    species: tempSpecies.value,
    weight: tempWeight.value});


  await fetch(`https://fisher-game.firebaseio.com/catches/${catchID}.json`, {method: "PUT", body: updatedCatch})
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    loadCatches();
}

// TODO: Create delete out of the examples above or in a different way!