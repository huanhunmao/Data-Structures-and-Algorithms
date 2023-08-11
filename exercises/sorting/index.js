// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// 冒泡排序 时间复杂度 O(n^2) 空间复杂度 O(n)
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) { // 比较后 交换位置 小的放左边 大的放右边
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}
// 选择排序 时间复杂度 O(n^2) 空间复杂度 O(n)
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i; // 选择一个最小值
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) { // 循环拿到这个最小值
          minIndex = j;
        }
      }
      if (minIndex !== i) { // 将小的数字 放在 最小值左边
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }
  
  // 归并排序 时间复杂度 O(nlogn) 空间复杂度 O(n)
  function mergeSort(arr) {
    if(arr.length <= 1){
        return arr
    }

    const middle = Math.floor(arr.length / 2); // 分为左右两部分 
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle))

    return merge(left, right)
  }
  
  function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0 

    while(leftIndex < left.length && rightIndex < right.length){ // 左边放左侧 右边放右侧  
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex ++
        }else{
            result.push(right[rightIndex])
            rightIndex ++ 
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
