// 1.布尔类型
let bool: boolean
bool = true

// 2.数值
let num: Number
num = 123
// 2进制
num = 0b10101
// 8进制
num = 0o173
// 16进制
num = 0x7b

// 3.字符串
let str: String
str = 'litokele'
console.log(num)

// 4.数组类型
  // 写法1
  let arr: number[]
  arr = [1, 23, 4]

  // 写法2
  let arr2: Array<number>

  // 联合类型
  let arr3: (string | number)[]
  arr3 = [1, '2']

  // 元组类型 
  let tuple: [string, number, boolean] // 必须一一对应, 不能越界
  tuple = ['litokele', 123, true]

  // 枚举类型
  enum Roles {
    SUPER_ADMIN = 2, // 不指定直接从0开始
    ADMIN = 5,
    USER = 6
  }
  console.log(Roles.USER) // 6 
  console.log(Roles[2])   // SUPER_ADMIN

// 5.any 类型
let value: any
value = 123
value = '123'
value = false
const arr4: any[] = [1, '12', true]

// 6.void 类型
const foo = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
// v = null 在strict 中报错

// 7.null undefined
let u: undefined
u = undefined
let n: null
n = null

// 7.never 类型
const errFunc = (message: string): never => { // 报错
  throw new Error(message)
}
const infiniteFunc = (): never => { // 死循环
  while (true) {}
}
let neverVariable = () => {
  while (true) {}
}
// 谁都不能赋值 给never
// never可以给其他类型赋值

// 8.object 类型
let obj = {
  name: 'litokele'
}
let obj2 = obj
obj2.name = 'kele'
console.log(obj)
function getObject(obj: object): void {
  console.log(obj)
} 
getObject(obj)

// 9.类型断言
function getLength(target: string | number): number {
  // 方式1 (<type>variable)  jsx 中不支持
  // 方式2 (variable as type)
  if ((<string>target).length && (<string>target).length === 0) {
    return (target as string).length
  }
  return target.toString().length
}




