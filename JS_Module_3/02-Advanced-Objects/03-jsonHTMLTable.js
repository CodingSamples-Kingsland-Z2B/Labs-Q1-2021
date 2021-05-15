function main(someJSON) {
  let inputArray = JSON.parse(someJSON);
  let headerArray = [ "  <tr>"];
  let finalHTMLArray = ["<table>"];
  let objKeys = Object.keys(inputArray[0]);

  for (eachKey of objKeys) {
    headerArray.push(`<th>${eachKey}</th>`);
  }
  headerArray.push(`</tr>`);
  let tableHeaderHTML = headerArray.join("")
  finalHTMLArray.push(tableHeaderHTML);
  
  for (i = 0; i < inputArray.length; i++) {
    //console.log("The original object is ", inputArray[i]);
    let tempArray = Object.values(inputArray[i]);
    let rowHTML = ['  <tr>']
    for (eachItem of tempArray) {
      rowHTML.push(`<td>${encodeURIComponent(eachItem)}</td>`)
    }
    rowHTML.push('</tr>');
    let tempRowHTML = rowHTML.join("");
    finalHTMLArray.push(tempRowHTML);
  }
  finalHTMLArray.push('</table>')
  return ( finalHTMLArray.join(''));
}

main(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&BChocolate","Price":0.96}]']);

/* 

[0] <table> DONE
[1]   <tr><th>Name</th><th>Price</th></tr> DONE 
[2]   <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
[3]   <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
[4] </table> */