// EXAMPLE 1 FROM THE SLIDES & GETTING STARTED FROM Handlebars

let theTemplate = "<h3>Name: {{name}}</h3>"; // Template as a String
console.log("I'm the template as plain HTML", theTemplate);

const compiledTemplate = Handlebars.compile(theTemplate); // The argument is the template as a string
console.log("I'm the function created by Handlebars, from the template HTML", compiledTemplate());

let someData = { name: "Nils" } // I'm just a JS Object! 

let htmlCreatedFromTemplate = compiledTemplate(someData); // Returned HTML created with the values from the argument object in the function the template created. 

console.log("I'm the returned value of the template filled in by the compiled function", htmlCreatedFromTemplate );

// Add the rendered HTML to the DOM

document.getElementById('app').innerHTML = htmlCreatedFromTemplate;



// EXAMPLE #2 FROM SLIDES

let hbsTemplate = document.getElementById("contact-template").innerHTML; // Get the template from the HTML file
let contactTemplateCompiled = Handlebars.compile(hbsTemplate); // Pass plain HTML into Handlebars, get back a function

// Next get some data to pass into the function we just created

let context = {
  name: 'Ivan Ivanov',
  phone: '0888 123 456', 
  email: 'i.ivanov@gmail.com'
};

let contactHTML = contactTemplateCompiled(context); // Create the HTML with the data by calling the function and passing in the data
console.log("The html is ", contactHTML);

// Then add the rendered HTML to the DOM
let contactDIV = document.getElementById('contactDIV');
contactDIV.innerHTML = contactHTML;


// EXAMPLE #3 "{{ #each }}"

let people = [ 
  { name: 'Person 1', favColor: 'Red' }, 
  { name: '2nd Person', favColor: 'Purple' }, 
  { name: '3rd Person', favColor: 'Lilac' }
]
// Create the template, use the #each syntax, and bind "this"

let template = Handlebars.compile(`{{#each this}} <h3>Hello {{this.name}}, your favorite color is {{this.favColor}} {{/each}} </h3>`); 

// Add the rendered HTML to the DOM

let container = document.getElementById('eachDIV'); 
container.innerHTML = template(people);











    // HTML VERSION OF WHAT TEMPLATES DO, PLZ IGNORE MOSTLY FOR EXAMPLE

    // function returnHTML(someObject) {
    //   return (`
    //     <h1>${someObject.name}</h1>
    //   `)
    // }
    // someFunction.innerHTML = returnHTML({ name: 'Something Else', favColor: 'Purple' });