// const average = []
// console.log(average);
//const marks = [12, 56, 76, 88, 92, 54]

// console.log(marks[0]);
// console.log(marks[marks.length-1]);

// marks.push(34)
// console.log(marks);

// marks.pop()
// console.log(marks);

// for (let i = 0; i< marks.length; i++){
//     console.log(marks[i]);
// }

const marks = [12, 56, 76, 88, 92, 54];

function check_element(elmnt) {
    for (let i = 0; i < marks.length; i++) {
        if (elmnt === marks[i]) {
            console.log('Element found at index', i);
            return i;  // Return the index when element is found and stop the loop
        }
    }
    console.log('Element not found');
    return -1;  // Return -1 if the element is not found
}

// Example usage:
check_element(76);

// How do you remove an element from an array at a specific index?

console.log(marks);
marks.splice(2, 0, 73)
console.log(marks);



console.log(marks.slice(2, 4));


//  How do you concatenate two arrays in JavaScript?

const avg = [35, 43, 32, 18, 9]

combinedArr = avg.concat(marks)
console.log(combinedArr);

// Question 1: Write a function to flatten a nested array in JavaScript

const arr = [23, 34, [38, 33, 41, [58, 92], 72], 18];

console.log(arr);
const flattenedArr = arr.flat(Infinity);
console.log(flattenedArr);




