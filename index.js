function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}

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

//快速排序完整版 start 
function partition(array, start, end) {
  let j = start;

  //获取随机分界点
  let randomIndex = Math.floor(Math.random() * (end - start + 1) + start)
  swap(array, end, randomIndex)
  let pivot = array[end]

  for (let i = start; i <= end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j)
      j++
    }
  }
  return j - 1;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (end - start < 1) return array;
  let pivotIndex = partition(array, start, end)
  quickSort(array, start, pivotIndex - 1)
  quickSort(array, pivotIndex + 1, end)
  return array;
}
//快速排序完整版 end

//计数排序 start 适用于整数数组
function countingSort(array) {
  //获取最小值 作为偏差值以兼容负整数
  let min = Infinity;
  for (let v of array) {
    if (v < min) {
      min = v
    }
  }

  let counts = []
  for (let v of array) {
    counts[v - min] = (counts[v - min] || 0) + 1
  }

  let index = 0;
  for (let i = 0; i < counts.length; i++) {
    let count = counts[i]
    while (count > 0) {
      array[index] = i + min
      index++
      count--
    }
  }

  return array
}
//计数排序 end

//桶排序 start
function bucketSort(array, size = 10) {
  let min = Math.min(...array)
  let max = Math.max(...array)
  let count = Math.floor((max - min) / size) + 1
  let buckets = []
  for (var i = 0; i < count; i++) {
    buckets.push([])
  }

  for (let value of array) {
    let bucketIndex = Math.floor((value - min) / size)
    buckets[bucketIndex].push(value)
  }

  let result = []
  for (let bucket of buckets) {
    result.push(...insertionSort(bucket))
  }

  return result;
}
//桶排序 end

export {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  easyQuickSort,
  quickSort,
  countingSort,
  bucketSort
}