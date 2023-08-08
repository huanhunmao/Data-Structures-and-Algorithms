// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 1 array slice
// function chunk(array, size) {
//     let chunked = []
//     let index = 0

//     while(index < array.length) {
//         chunked.push(array.slice(index, index + size)) // 截取 size === 2 放入结果数组内
//         index += size
//     }

//     return chunked
// }

// 2 for 
// function chunk(array, size){
//     const len = array.length
//     let chunked = [];
    
//     for(let i = 0; i < len; i += size){
//         chunked.push(array.slice(i, i + size))
//     }

//     return chunked
// }

// 3 splice 
function chunk(array, size){
    let chunked = [];

    while(array.length > 0 ){
        chunked.push(array.splice(0,size))
    }

    return chunked
}

module.exports = chunk;
