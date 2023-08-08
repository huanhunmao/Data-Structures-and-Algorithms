// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// 1 for of 遍历字符串 + 对象
// function maxChar(str) {
//     const charMap = {};
//     let maxChar = '' // 记录最大字符
//     let maxCount = 0 // 记录最大数量

//     for(let char of str) {
//         charMap[char] = charMap[char] + 1 || 1   // 在 charMap 中增加字符的频率，如果不存在则初始化为 1
//         if(charMap[char] > maxCount) {  // 如果当前字符的频率大于之前记录的最大频率
//             maxCount = charMap[char]  // 更新最大频率
//             maxChar = char   // 更新出现最多的字符
//         }
//     }

//     return maxChar
// }

// 2 map 
// function maxChar(str) {
//     const charMap = new Map();
//     let maxChar = ''
//     let maxCount = 0 

//     for(let char of str) {
//         charMap.set(char, (charMap.get(char) || 0) + 1)

//         if(charMap.get(char) > maxCount) {
//             maxCount = charMap.get(char)
//             maxChar = char
//         }
//     }

//     return maxChar
// }

module.exports = maxChar;
