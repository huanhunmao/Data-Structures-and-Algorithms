// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 1 最基础写法 遍历 一遍 非常好理解
// function vowels(str) {
//     let count  = 0 

//     for(let i  = 0; i< str.length; i++) {
//         const eachStr = str[i].toLowerCase()
//         if(eachStr === 'a' ||  eachStr === 'e' || eachStr === 'i' || eachStr === 'o' || eachStr === 'u') {
//             count ++
//         }
//     }

//     return count
// }

// 2 set 
function vowels(str){
    const vowelSet = new Set(['a','e','i','o','u']);
    let count = 0 

    for(let i of str.toLowerCase()){
        if(vowelSet.has(i)){
            count ++
        }
    }

    return count
}

module.exports = vowels;
