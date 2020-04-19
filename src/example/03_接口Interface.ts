// 基本用法
interface NameInfo {
  firstName: string,
  lastName: string
}
const getFullName = ({ firstName, lastName }: NameInfo) => {
  return `${firstName} ${lastName}`
}
/* const getFullName2 = ({ firstName, lastName }: { firstName: string, lastName: string }) => {
  return `${firstName} ${lastName}`
} */
getFullName({ firstName: 'li', lastName: 'haoyue' })


interface Vegetables {
  color?: string, // 表示可以不传
  readonly type: string, // 只读
  [prop: string]: any // 可以传入任意的
}

const getVegetables = ({ color, type }: Vegetables) => {
  return color ? `A ${color} ${type}` : `A ${type}`
}

getVegetables({
  color: 'red',
  type: 'apple'
})
getVegetables({
  type: 'apple'
})
// 多余属性检查 3种  [prop: string]: any， as Vegetables， getVegetables(vegetableInfo)
getVegetables({
  color: 'red',
  type: 'apple',
  size: 2
} as Vegetables)
const vegetableInfo = {
  color: 'red',
  type: 'apple',
  size: 2
}
getVegetables(vegetableInfo)

interface ArrInter {
  0: number,
  readonly 1: string
}
let arr6: ArrInter = [1, '122']

// 接口定义函数结构
type AddFunc = (num1: number, num2: number) => number // 接口
const add: AddFunc = (num1, num2) => {
  return num1 + num2
}

// 接口的继承
interface Tomato extends Vegetables {
  price: number
}
const tomato: Tomato = {
  color: 'red',
  type: 'tomato',
  price: 180
}

interface Counter {
  (): void,
  count: number // 在一个函数上定义一个属性
}

const getCounter = (): Counter => { // 返回一个counter函数
  const c = () => {
    c.count++
  }
  c.count = 0 // 初始化 Counter 函数的属性
  return c
}
let counter = getCounter()
counter()