//Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).
function palindrome(string) {
    // Remove non-alphanumeric characters and convert to lowercase
    let revString = string.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    if (string.replace(/[\W_]/g, '').toLowerCase() === revString) {
        console.log(revString)
        return `${string} is a palindrome`;
    }
    console.log(revString)
    return `${string} is not a palindrome`;
}


console.log(palindrome('A man, a plan, a canal, Panama')); 
console.log(palindrome('Hello, world!'))






