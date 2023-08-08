// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const cleanStr1 = cleanStr(stringA)
    const cleanStr2 = cleanStr(stringB)

    return sortStr(cleanStr1) === sortStr(cleanStr2)
}

function cleanStr(str){  // 将不是字母的排除掉
    return str.replace(/[^\w]/g, '').toLowerCase() // 匹配所有不是字母（包括大小写）、数字或下划线的字符, 替换为空
}

function sortStr(str){ // 字符排序 
    return str.split('').sort().join('')
}

module.exports = anagrams;
