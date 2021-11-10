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
  bucketSort,
  radioSort,
} from '../index'

// 生成随机数组
let unSortArray = randomArray(1000);
// 给随机数组排序
let copyArray = JSON.parse(JSON.stringify(unSortArray))
let sortArray = copyArray.sort((a, b) => a - b);


describe('排序算法测试', () => {
  test('bubbleSort 冒泡排序', () => {
    expect(bubbleSort(unSortArray)).toEqual(sortArray)
  })

  test('selectionSort 选择排序', () => {
    expect(selectionSort(unSortArray)).toEqual(sortArray)
  })

  test('insertSort 插入排序', () => {
    expect(insertionSort(unSortArray)).toEqual(sortArray)
  })

  test('mergeSort 归并排序', () => {
    expect(mergeSort(unSortArray)).toEqual(sortArray)
  })

  test('easyQuickSort 快速排序简化版', () => {
    expect(easyQuickSort(unSortArray)).toEqual(sortArray)
  })

  test('quickSort 快速排序完整版', () => {
    expect(quickSort(unSortArray)).toEqual(sortArray)
  })

  test('countingSort 计数排序', () => {
    expect(countingSort(unSortArray)).toEqual(sortArray)
  })

  test('bucketSort 桶排序', () => {
    expect(bucketSort(unSortArray)).toEqual(sortArray)
  })

  test('radioSort 基数排序', () => {
    expect(radioSort(unSortArray)).toEqual(sortArray)
  })

})