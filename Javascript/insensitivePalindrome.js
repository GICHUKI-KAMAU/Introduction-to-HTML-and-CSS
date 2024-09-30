
function insPalindrome(str) {
    let cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    return reversedStr === cleanedStr;
}


console.log(insPalindrome('Aba'));
console.log(insPalindrome('Racecar'));
console.log(insPalindrome('Palindrome'));
console.log(insPalindrome('Madam'));
console.log(insPalindrome('Hello'));