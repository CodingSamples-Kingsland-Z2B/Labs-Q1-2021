function main(anArray, someFunction) {

    return anArray.reduce((accumulator, currentVal) => {// acc = empty array here ... 
        
        // calling someFunction <- (acting as map)  arguments == (anArray original array vals, currentVal mapped values)
        accumulator.push(someFunction.call(anArray, currentVal));// calling on "anArray"... currentVal is the arg being passed into the function

        return accumulator;

    }, []);// identifies accumulator as an array to be pushed to

}

let nums = [1,2,3,4,5];
console.log(main(nums,(item)=> item * 2));