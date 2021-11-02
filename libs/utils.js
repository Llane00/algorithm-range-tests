// 交换数组中index为a和b的两个值的位置
const swap = (array, a, b) => {
  return [array[a], array[b]] = [array[b], array[a]]
}

//生成1-100之间的随机数
const randomNum = () => {
  return Math.floor(Math.random() * 100 + 1)
}

//生成随机数组，随机长度+随机数值
const randomArray = () => {
  return Array.from(Array(randomNum()), _ => randomNum())
}

export {
  swap,
  randomNum,
  randomArray
}