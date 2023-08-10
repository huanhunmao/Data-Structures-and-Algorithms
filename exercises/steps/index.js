// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 1 两层 for 循环 
// function steps(n) {
//     for(let i = 0; i < n; i++) {
//         let step = ''
//         for(let j = 0; j < n; j++) {
//             if(j <= i){
//                 step += '#'
//             }else{
//                 step += ' '
//             }
//         }

//         console.log(step);
//     }
// }

function steps(n, row = 0, stair = ''){ // n（阶梯的级数），row（当前级数），stair（当前正在构建的级数字符串）
    if(n === row) return 

    if(n === stair.length){
        console.log(stair);
        return steps(n, row + 1)
    }

    // 如果当前 stair 字符串的长度小于等于当前 row，函数将向 stair 字符串添加一个 # 字符。否则，添加一个空格字符
    if(stair.length <=  row){ 
        stair += '#'
    }else{
        stair += ' '
    }

    // 函数递归，将确定的字符添加到 stair 字符串中，保持相同的 row 值
    steps(n, row, stair )
}

module.exports = steps;
