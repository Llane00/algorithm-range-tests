import { randomArray } from '../libs/utils'
import { insertionSort } from '../index'

// 生成随机数组
let unSortArray = randomArray();
// 给随机数组排序
let sortArray = unSortArray.sort((a, b) => a - b);
// let unSortArray = [3, 2, 1]
// let sortArray = [1,2,3]

describe('fizzbuzz', () => {
  test('insertSort 测试插入排序', () => {
    expect(insertionSort(unSortArray)).toStrictEqual(sortArray)
  })


})