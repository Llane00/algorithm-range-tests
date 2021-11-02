//插入排序
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

export  {
  insertionSort
}