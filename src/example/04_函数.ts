// 1
function add2(n1: number, n2: number): number {
  return n1 + n2
}
// 2 通过变量名定义
let add3: (x: number, y: number) => number
const name2: string = 'litokele'
add3 = (n1, n2) => n1 + n2
// add3 = (n1, n2) => n1 + n2 + name2

// 3 通过type定义（接口）
type Add = (x: number, y: number) => number
let add4: Add
add4 = (n1, n2) => n1 + n2
add4 = (n1: number, n2: number) => n1 + n2

// 函数的参数
// 可选参数 必须在必选参数后面 ?
type AddFunction = (num1: number, num2: number, num3?: number) => number
let addFunction: AddFunction
addFunction = (x: number, y: number) => x + y
addFunction = (x: number, y: number, z: number) => x + y + z
// 默认参数
addFunction = (x: number, y: number = 3) => x + y
// addFunction = (x: number, y: number = '3') => x + y   /error
const handleData = (x: number, ...args: number[]) => {
  // ...
}
// 函数重载 只能用function来定义
function handler(x: string): string[]
function handler(x: number): number[]
function handler(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else if (typeof x === 'number') {
    return x.toString().split('').map(item => Number(item))
  }
}

