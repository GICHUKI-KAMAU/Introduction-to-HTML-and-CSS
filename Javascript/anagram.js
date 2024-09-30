function isAnagram(str1, str2){
    str1=str1.replace(/\s/g, '').toLowerCase();
    str2=str2.replace(/\s/g, '').toLowerCase();

    if(str1.length != str2.length){
        return false;
    }
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 === str2
}
const check = isAnagram('Silent', 'Listen');
console.log(check);