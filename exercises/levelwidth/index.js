// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// 精妙之处在于 每一层 用 s 作为结束符号  再进行下一层
// function levelWidth(root) {
//     const widths = []
//     const queue = [root, 's'] // 's' is used as a delimiter for levels

//     let levelWidth = 0

//     while (queue.length > 1){ // Stop when only delimiter 分隔符 's' is left in the queue
//         const node = queue.shift()

//         if(node === 's'){ // 每层结束时 更新 widths  重置 levelWidth  并放入s 继续下一层
//             widths.push(levelWidth)
//             levelWidth = 0
//             queue.push('s') // Add delimiter for the next level
//         }else{ // 没有结束时 则累计
//             levelWidth ++
//             queue.push(...node.children)
//         }
//     }

//     widths.push(levelWidth) // Add the width of the last level

//     return widths
// }


function levelWidth(root){
    let widths = []
    let levelWidth = 0
    let queue = [root, 's']

    while(queue.length > 1){
        const node = queue.shift()
        if(node === 's'){
            widths.push(levelWidth)
            levelWidth = 0
            queue.push('s') // Add delimiter for the
        }else{
            levelWidth ++ 
            queue.push(...node.children)
        }
    }

    widths.push(levelWidth)

    return widths
}

module.exports = levelWidth;
