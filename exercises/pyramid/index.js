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
function pyramid(n) {
    const maxWidth = 2 * n - 1  // 最大长度

    for(let i = 0; i < n; i++) {
        const numChars = 2 * i + 1 // 每一行的数量 
        const numSpaces = (maxWidth - numChars) / 2 // 每行空格数 这个感觉也不好想 
        const level = ' '.repeat(numSpaces) + '#'.repeat(numChars) + ' '.repeat(numSpaces) // 组合结果

        console.log(level);
    }
}

module.exports = pyramid;
