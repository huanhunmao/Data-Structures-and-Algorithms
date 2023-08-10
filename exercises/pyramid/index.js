// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1 最基本的组合方式
// function pyramid(n) {
//     const maxWidth = 2 * n - 1  // 最大长度

//     for(let i = 0; i < n; i++) {
//         const numChars = 2 * i + 1 // 每一行的数量 
//         const numSpaces = (maxWidth - numChars) / 2 // 每行空格数 这个感觉也不好想 
//         const level = ' '.repeat(numSpaces) + '#'.repeat(numChars) + ' '.repeat(numSpaces) // 组合结果

//         console.log(level);
//     }
// }

// 2 递归的方式 
function  pyramid(n, row = 0, level = ''){  // n（金字塔的层数），row（当前行），level（当前正在构建的层级字符串）
    if(row === n) return  // row 达到了 n 递归结束

    if(level.length === 2 * n - 1){ // 当前 level 字符串的长度等于 2 * n - 1，则当前层已经构建完成，将其打印到控制台。然后函数递归到下一行
        console.log(level);
        return pyramid(n, row + 1)
    }

    // 当前 level 字符串的长度小于 2 * n - 1，函数计算金字塔的中心点位置 midpoint，它是最后一层中心 # 字符的索引
    const midPoint = Math.floor(( 2 * n - 1) / 2 ) 
    // 距离中心点的位置，确定要在 level 字符串的当前位置添加空格还是 # 字符
    let addChar = ' '
    if(midPoint - row  <= level.length && midPoint + row >= level.length){
        addChar = '#'
    }

    pyramid(n, row, level + addChar)
}

module.exports = pyramid;
