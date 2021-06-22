function area(x,y) {
    return this.x * this.y;
}

function vol(x,y,z) {
    return this.x * this.y * this.z;
}

function main(area, vol, input) {
 //console.log(area, vol)
  let outputArray = [];
  let arrayOfObjects = JSON.parse(input);
  for (eachItem of arrayOfObjects) {
    //console.log("each item is ", eachItem);
    outputArray.push({
      area: area.call(eachItem),
      volume: vol.call(eachItem)
    });
  }
    console.log(outputArray);
}


main(area, vol, `[     {"x":"1","y":"2","z":"10"},     {"x":"7","y":"7","z":"10"},     {"x":"5","y":"2","z":"10"}     ]`);

main(area, vol, `[     {"x":"10","y":"-22","z":"10"},     {"x":"47","y":"7","z":"-5"},     {"x":"55","y":"8","z":"0"},     {"x":"100","y":"100","z":"100"},     {"x":"55","y":"80","z":"250"}     ]`)