// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// 1 比较原始的方法   直接按照步骤来
// function capitalize(str) {
//     const arr = str.split('')

//     let res = ''
//     for(let i = 0; i < arr.length; i++) {
//         arr[0] = arr[0].toUpperCase()

//         if(arr[i] == ' '){
//             arr[i + 1] = arr[i + 1].toUpperCase()
//         }
//         res += arr[i]
//     }

//     return res
// }

// 2 slice 
function capitalize(str) {
    const words = str.split(' ')

    for(let i = 0; i < words.length; i++) { // 利用空格完全拆开字符串  然后首字母大写其他保持不变
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }

    return words.join(' ')
}

module.exports = capitalize;
