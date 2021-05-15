let clicks = 2;
function growingWord() {
    console.log("Function invoked");
    console.log("it works");
    let myPTag = document.querySelector("#exercise p");
    let myPTagColor = myPTag.style.color;
    if (myPTag.style.fontSize === "") {
      myPTag.style.fontSize = `2px`;
      myPTagColor = "blue";
    } else {
        let fontSize = myPTag.style.fontSize;
        let fontNum = fontSize.slice(0, fontSize.length - 2);
        console.log(fontNum);
        myPTag.style.fontSize = `${fontNum * 2}px`;
        eachClick++;
        startSize *= 2;
        myPTag.style.fontSize = `${startSize}px`;
        console.log(myPTag.style.fontSize);
      }
    // Bryan's / Chris's code
    // const myPTag = document.getElementsByTagName("p")[2];
    // const myPTagColor = myPTag.style.color;
    // if (!myPTag.style.fontSize) {
    //     myPTag.style.fontSize = `${clicks}px`;
    //     console.log(myPTag.style.fontSize);
    // } else {
    //     clicks *= 2;
    //     myPTag.style.fontSize = `${clicks}px`;
    //     console.log(myPTag.style.fontSize);
    // }
    if (myPTagColor === "blue") {
        myPTag.style.color = "green";
    } else if (myPTagColor === "green") {
        myPTag.style.color = "red";
    } else {
        myPTag.style.color = "blue";
    }
}
// Ron's code
// function growingWord() {
//     const word = document.querySelector("#exercise p");
//     const font = word.style.fontSize;
//     const color = word.style.color;
//     console.log(font, color);
//     // if the word doesn't have the color or font
//     if (!font && !color) {
//         // word.style.cssText = 'font-size:2px; color:blue';
//         word.style.color = "blue";
//         word.style.fontSize = "2px";
//         return;
//     }
//     // If the word already has a color and font
//     // remove 'px' from the font to muliply it by 2
//     let size = font.slice(0, font.length - 2);
//     size *= 2;
//     word.style.fontSize = size + "px";
//     if (color === "blue") {
//         word.style.color = "green";
//     } else if (color === "green") {
//         word.style.color = "red";
//     } else if (color === "red") {
//         word.style.color = "blue";
//     }
// }