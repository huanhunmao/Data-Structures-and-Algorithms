// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1 先转为数组 使用 数组 api 解决
// function reverse(str) {
//     const characters = str.split('');
//     const reverseArr = characters.reverse();

//     return reverseArr.join('')
// }

// // 2 for 
// function reverse(str) {
//     let res = ''
//     for(let i = str.length - 1; i >= 0; i--) {
//         res += str[i]
//     }

//     return res
// }

// 3 reduce 
// function reverse(str) {
//     return str.split('').reduce((prev, next) => next + prev, '')
// }

// 4 Array.from 
// function reverse(str) {
//     return Array.from(str).reverse().join('');
// }

// 5 ...
function reverse(str){
    return [...str].reverse().join('');
}

module.exports = reverse;
