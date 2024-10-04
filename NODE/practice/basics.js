const { add, sub, mult, div } = require("./math");

console.log(mult(3, 6));

const fsPromises = require("fs").promises;
const path = require("path");

fileops = async () => {
  try {
    //read the data in the new.txt file and print it
    const data = await fsPromises.readFile(path.join(__dirname, "new.txt"));
    console.log(data.toString());
    //create a new prom.txt file and write the data that was in the new.txt
    await fsPromises.writeFile(path.join(__dirname, "prom.txt"), data);

    //add "kill the one to save the five" into the newly created prom.txt
    await fsPromises.appendFile(
      path.join(__dirname, "prom.txt"),
      "\n \nkill the one to save the five"
    );

    //rename the prom.txt into AFC.txt
    await fsPromises.rename(
      path.join(__dirname, "prom.txt"),
      path.join(__dirname, "AFC.txt")
    );

    //logs the text in the data to the console
    const newdata = await fsPromises.readFile(path.join(__dirname, "AFC.txt"));
    console.log(newdata.toString());
  } catch (err) {
    //incase of any error, print this on the console
    console.log("file not found");
  }
};

fileops();
