// // uses .reduce() to implement a simple version of .map().

function main(anArray, someFunction) {
  let newArray = [];
  for ( let i = 0; i < anArray.length; i++) {
    newArray.push(someFunction(anArray[i]));
  } 

  return newArray;
}

// let nums = [1,2,3,4,5]; 
// console.log(main(nums,(item)=> item * 2));

// // console.log(nums.map(eachNumber => {
// //   return eachNumber * 2
// // }))

function mainReducer(anArray, someFunction) {
  return anArray.reduce((a, b) => {
    console.log(`I am ${a} and I am ${b}`);
    return a.concat(someFunction(b))
  }, []);
  // // return anArray.reduce(function(a, b) {
  // //   return a.concat(someFunction(b));
  // // }, [])
  // return anArray.map(eachItem => {
  //   return someFunction(eachItem);
  // })
}

let nums = [1,2,3,4,5]; 
console.log(mainReducer(nums,(item)=> item * 2));