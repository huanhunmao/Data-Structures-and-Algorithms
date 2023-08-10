// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 1 递归方式 
// function fib(n) {
//     if(n === 0 || n === 1) return n

//     return fib( n - 1) + fib(n - 2)
// }

// 迭代方式
function fib(n){
    if(n === 0 || n === 1) return n // 列出特殊情况 

    let fibPrev = 0 
    let fibCurrent = 1

    for(let i = 2; i <= n; i++) { 
        const fibNext = fibCurrent + fibPrev // 往后推 
        fibPrev = fibCurrent
        fibCurrent = fibNext
    }

    return fibCurrent
}

module.exports = fib;
