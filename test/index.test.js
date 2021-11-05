import {
  randomArray
} from '../libs/utils'
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  easyQuickSort,
  quickSort,
  countingSort,
} from '../index'

// 生成随机数组
let unSortArray = randomArray(1000);
// 给随机数组排序
let sortArray = unSortArray.sort((a, b) => a - b);

describe('排序算法测试', () => {
  test('bubbleSort 冒泡排序', () => {
    expect(bubbleSort(unSortArray)).toStrictEqual(sortArray)
  })

  test('selectionSort 选择排序', () => {
    expect(selectionSort(unSortArray)).toStrictEqual(sortArray)
  })
  
  test('insertSort 插入排序', () => {
    expect(insertionSort(unSortArray)).toStrictEqual(sortArray)
  })

  test('mergeSort 归并排序', () => {
    expect(mergeSort(unSortArray)).toStrictEqual(sortArray)
  })

  test('easyQuickSort 快速排序简化版', () => {
    expect(easyQuickSort(unSortArray)).toStrictEqual(sortArray)
  })

  test('quickSort 快速排序完整版', () => {
    expect(quickSort(unSortArray)).toStrictEqual(sortArray)
  })
  
  test('countingSort 计数排序', () => {
    expect(countingSort(unSortArray)).toStrictEqual(sortArray)
  })
  

})