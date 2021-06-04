function encodeAndDecodeMessages() {
  const messageToEncodeBox = document.querySelector('textarea');
  const receiveMsgBox = document.getElementsByTagName('textarea')[1];
  const buttonEncode = document.querySelector('button');
  const buttonDecode = document.getElementsByTagName('button')[1];
  console.log(messageToEncodeBox)
  // ES 6 way
  //const [messageToEncodeBox, recieveMsgBox] = document.getElementsByTagName('textarea');

  buttonEncode.addEventListener('click', encodeMessage);
  buttonDecode.addEventListener('click', decodeMessage);

  function encodeMessage() {
    let msgToEncode = messageToEncodeBox.value;
    console.log("The message to encode is ", msgToEncode);
    let encodedMsg = msgToEncode.split("").map(eachLetter => eachLetter.charCodeAt() + 1).map(eachCode => String.fromCharCode(eachCode)).join("")
    console.log(encodedMsg);
    receiveMsgBox.value = encodedMsg;
    messageToEncodeBox.value = "";
  }

  function decodeMessage() {
    let msgToDecode = receiveMsgBox.value;
     let decodedMsg = msgToDecode.split("")
     .map(eachLetter => eachLetter.charCodeAt() - 1)
     .map(eachCode => String.fromCharCode(eachCode))
     .join("");
     console.log(decodedMsg);
     receiveMsgBox.value = decodedMsg;
     
  }
}