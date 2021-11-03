//冒泡排序 start
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }

  return array
}
//冒泡排序 end!

//选择排序 start
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minNumberIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minNumberIndex]) {
        minNumberIndex = j
      }
    }
    if (minNumberIndex != i) {
      [array[i], array[minNumberIndex]] = [array[minNumberIndex], array[i]]
    }
  }

  return array
}
//选择排序 end!

//插入排序 start
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    let target = array[j];
    while (j > 0 && array[j - 1] > target) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = target;
  }
  return array;
}
//插入排序 end!

//归并算法 start
function merge(left, right) {
  let i = 0;
  let j = 0;
  let result = []
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  if (i < left.length) {
    result.push(...left.slice(i))
  }
  if (j < right.length) {
    result.push(...right.slice(j))
  }

  return result
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }

  let middlePoint = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, middlePoint))
  let right = mergeSort(array.slice(middlePoint))
  return merge(left, right)
}
//归并算法 end!

//快速排序简化版 start
function easyQuickSort(array) {
  if (array.length < 2) return array
  let pivot = array[array.length - 1]
  let left = array.filter((item, index) => item <= pivot && index != array.length - 1)
  let right = array.filter(item => item > pivot)
  return [...easyQuickSort(left), pivot, ...easyQuickSort(right)]
}
//快速排序简化版 end


export {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  easyQuickSort
}