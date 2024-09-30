//Write a JavaScript program to list the properties of a JavaScript object.
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function listProperties(obj) {
  return Object.keys(obj).join(",");
}
console.log(listProperties(student));

//  2. Write a JavaScript program to delete the rollno property from the following object.
//  Also print the object before or after deleting the property

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(student);

delete student.rollno;

console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.keys(student).length);

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function displayReadingStatus(books) {
  books.forEach(function (book) {
    console.log(
      `Title: ${book.title}, Author: ${book.author}, Reading Status: ${
        book.readingStatus ? "Already Read" : "Not Read Yet"
      }`
    );
  });
}

displayReadingStatus(library);

//  Write a JavaScript program that returns a subset of a string.

function getSubsets(str) {
  let subsets = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subsets.push(str.substring(i, j));
    }
  }
  return subsets;
}

let str = "house";

console.log(getSubsets(str));


// Write a JavaScript program to sort an array of JavaScript objects.

 var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];


library.sort(function(a, b) {
    return b.libraryID - a.libraryID;
});


console.log(library);


//Write a JavaScript function to print all the methods in a JavaScript object.


function allMethods(myObject){
    return Object.getOwnPropertyNames(myObject).filter(function(property){
        return typeof myObject[property] == "function";
    });
}

    console.log(allMethods(Math));
    console.log(allMethods(Array));
    function all_properties(myObject){
        return Object.getOwnPropertyNames(myObject);
    }

    console.log(all_properties(Math));

    console.log(all_properties(Array));
 

// Write a JavaScript function to parse an URL.

function parseURL(url) {
    var parser = document.createElement('a');
    parser.href = url;
    
    return {
        href: parser.href,
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash
    };
}


let url = "https://www.example.com:8080/path/page?name=JohnDoe&id=123#section";
console.log(parseURL(url));

//Q13 A JavaScript function to retrieve all the names of an object's own and inherited properties.
function getAllPropertyNames(obj) {
  let properties = new Set();

  do {
     Object.getOwnPropertyNames(obj).forEach(prop => properties.add(prop));
  
  } while (obj = Object.getPrototypeOf(obj));

  return [...properties];
}
const obj = { name: "John", age: 30 };  
Object.prototype.gender = "Male";       

console.log(getAllPropertyNames(obj));


