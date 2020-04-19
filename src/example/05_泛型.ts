// 泛型变量 <T>
const getArray = <T>(value: T, length: number = 5): T[] => {
  return new Array(length).fill(value)
}
getArray<number>(2)

const getArray2 = <T, U>(p1: T, p2: U, time: number): [T, U][] => {
  return new Array(time).fill([p1, p2])
}
getArray2<number, string>(1, '2', 3)
/*
[
  [T, U],
  [T, U],
  [T, U]
]
*/
// 使用 type
type getArray3 = <T, U>(p1: T, p2: U, length: number) => T[]
const foo4: getArray3 = (x: any, y: any, z: number) => new Array(length).fill(x)
// 使用 定义
let getArray3: <T, U>(p1: T, p2: U, length: number) => T[]
// 使用接口
interface GetArray4 {
  <T, U>(p1: T, p2: U): T[],
  name: string
}
interface GetArray5<T, U> {
  (p1: T, p2: U): T[],
  name: string
}

// 对范型变量的限制
interface RestrictT {
  length: number
}
const getArray6 = <T extends RestrictT>(p1: T, p2: number): T[] => new Array(p2).fill(p1)
getArray6([1, 2, 3], 5)
getArray6('123', 5)
// getArray6(123, 5)  因为数字没有长度

// 如果没有这个key时会报错 K extends keyof T
const getProps = <T, K extends keyof T>(obj: T, keyName: K): any => obj[keyName]
let obj8 = {
  a: 'a',
  b: 'b'
}
getProps(obj8, 'a') // ok
// getProps(obj8, 'c') // err