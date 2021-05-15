function main(someArray) {
  let finalObject = {};
  for (i = 0; i < someArray.length; i += 2) {
    let tempCity = someArray[i].toLowerCase()
    if (!finalObject[tempCity]) { // if there is not a key in my object
      //console.log("No key found, the key is ", someArray[i])
      finalObject[tempCity] = +someArray[i + 1];
    } else {
      finalObject[tempCity] += +someArray[i + 1];
    }
  }

  JSON.stringify(finalObject);
  console.log(JSON.stringify(finalObject));
}

main(['Sydney','20','Melbourne','3','Sydney','5','Melbourne','4']);
main(['Sydney','20','Melbourne','3','sydney','5','melbourne','4']);