const fs = require("fs");


console.log("Starting Operation...");

fs.readFile("Data.txt", (err, data)=>{
    if(err){
        console.log("Error reading file", err);
    }else{
        console.log("File data", data.toString());
    }
})

console.log("Doing other stuff.....");


