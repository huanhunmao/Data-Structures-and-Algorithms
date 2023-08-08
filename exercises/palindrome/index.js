// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1 for
// function palindrome(str) {
//     let reverseStr = ''
//     for(let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i]
//     }

//     if(str === reverseStr) return true

//     return false
// }

// 2 array reverse 
function palindrome(str){
    const reverseStr = str.split('').reverse().join('')

    if(reverseStr === str) return true

    return false
}

module.exports = palindrome;
