
//: Create a function called filterAndSort that takes an indefinite number of arguments

function filterAndSort(filterFn, ...numbers) {
    
    const filteredNumbers = numbers.filter(filterFn)

        const sortedNumbers = filteredNumbers.sort((a, b) => a - b);
    
        return sortedNumbers;
  }
  
  
  const isEven = (num) => num % 2 === 0;
  console.log(filterAndSort(isEven, 'A', 5, 3, 8, 6, 'f', 2, 20)); 

  
  //: Create a function called mergeObjects that accepts an indefinite number of objects
  
  function mergeObjects(...objs){

    combinedArr = {...obj1, ...obj2}
    return combinedArr

  }

  const obj1 = {a: 1, b: 2};
  const obj2 = {b: 3, c: 4};

  console.log(mergeObjects(obj1, obj2));//{ a: 1, b: 3, c: 4 }


  function combineArrays(...arrays) {
    return [...new Set(arrays.flat())];
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];

const combinedArray = combineArrays(arr1, arr2, arr3);
console.log(combinedArray); //[1, 2, 3, 4, 5, 6, 7]



  

function extractProperties(objects, ...properties) {
  return objects.map(obj => {
      return properties.reduce((acc, prop) => {
          if (prop in obj) {
              acc[prop] = obj[prop];
          }
          return acc;
      }, {});
  });
}

const objects = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }];
console.log(extractProperties(objects, 'a', 'b')); // [{ a: 1, c: 3 }, { a: 4, c: 6 }]

