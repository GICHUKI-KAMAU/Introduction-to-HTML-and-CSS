function palindromeCount(str){
    let cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    const palindromes = new Set(); 

    function expandAroundCenter(left, right){
        while (left >= 0 && right < cleanedStr.length && cleanedStr[left] === cleanedStr[right]){
            palindromes.add(cleanedStr.substring(left, right + 1));
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < cleanedStr.length; i++) {
        
        expandAroundCenter(i, i);

     
        expandAroundCenter(i, i + 1);
    }

    return palindromes.size; 
}

console.log(palindromeCount('ababa')); 
console.log(palindromeCount('racecar'));
console.log(palindromeCount('aabb')); 
console.log(palindromeCount('a')); 
console.log(palindromeCount('abc'));         


// function countPalindromesInString(s) {
//     let count = 0;

//     if (s === s.split('').reverse().join('')) {
//         count += 1;
//     }

//     let testStr = '';
//     for (let i = 0; i < s.length; i++) {
//         testStr += s[i];

//         if (testStr === testStr.split('').reverse().join('')) {
//             count += 1;
//         }
//     }
//     return count;
// }




// console.log(countPalindromesInString("ababa"));
// console.log(countPalindromesInString("racecar"));
// console.log(countPalindromesInString("aabaa"));
// console.log(countPalindromesInString("a"));
// console.log(countPalindromesInString("abc"));