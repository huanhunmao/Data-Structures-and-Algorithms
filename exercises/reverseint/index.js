// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 1 转为字符串对比 
// function reverseInt(n) {
//     const strReversed =  parseInt(n.toString().split('').reverse().join(''));

//     // 带不带 负号  Math.sign(-11111) --> -1   Math.sign(-11111) --> 1  
//     return strReversed * Math.sign(n); 
// }

// 2 while 
function reverseInt(num){
    let reversed = 0
    let sign = Math.sign(num) // 取符号
    num = Math.abs(num) // 取绝对值

    while(num > 0){ // 进入循环，直到输入数字的所有位都被处理
        reversed = reversed * 10 + num % 10   // 将之前的翻转结果乘以10，然后加上输入数字的个位数
        num = Math.floor(num / 10)  // 通过整除10，将输入数字的个位数去除，继续处理下一位
    }

    return reversed * sign
}

module.exports = reverseInt;
