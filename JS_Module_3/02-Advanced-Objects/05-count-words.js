function main(someInput) {
  let wordCount = {} // I'm the counter! 
  let search = someInput[0].split(/[^\w]/gm).filter(word => word.length > 0); // return the value of word.length > 0
  //console.log(search);
  for (word of search) {
    wordCount[word] ? wordCount[word]++ : wordCount[word] = 1;
  }
  console.log(JSON.stringify(wordCount));
  
}

main(["Far too slow, you're far too slow."]);
//main(['JS devs use Node.js for server-side JS.-- JS for devs']);