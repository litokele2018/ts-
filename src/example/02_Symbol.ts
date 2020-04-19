const s1 = Symbol('litokele')
console.log(s1)
const s2 = Symbol('litokele')
console.log(s2)
let obj3 = {
  [s1]: 123,
  name: 'litokele',
  age: 18
}
obj3[s1] = 46546
console.log(Object.keys(obj3)) // ["name", "age"]
console.log(Object.getOwnPropertyNames(obj3)) // ["name", "age"]
console.log(JSON.stringify(obj3)) // {"name":"litokele","age":18}
console.log(Object.getOwnPropertySymbols(obj3)) // [Symbol(litokele)]
console.log(Reflect.ownKeys(obj3)) // ["name", "age", Symbol(litokele)]
// 方法 Symbol.for() Symbol.keyFor()
// 1.Symbol.for()
const symbol1 = Symbol('haha')
const symbol2 = Symbol.for('haha') // 通过Symbol.for() 创建的会被复用
console.log('symbol2', symbol2)
const symbol3 = Symbol.for('haha')
// console.log(symbol1 === symbol2) // false
// console.log(symbol2 === symbol3) // true

// 2.Symbol.keyFor()
const s8 = Symbol('keyfor')
console.log(Symbol.keyFor(s8)) // undefined
const s9 = Symbol.for('keyfor')
console.log(Symbol.keyFor(s9)) // keyfor 只能获取通过for创建的symbol

// 11个内置的Symbol值
// 1.Symbol.hasInstance 在 调用instanceof时 会执行这个方法
let obj4 = {
  [Symbol.hasInstance](otherObj) {
    console.log(otherObj)
  }
}
let obj5 = {
  name: 'test'
}
obj5 instanceof <any>obj4 // {name: "test"}

// 2.Symbol.isConcatSpreadable : boolean 调用concat时是否扁平化
/* 对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。 */
let arr5: number[] = [1, 2]
console.log([].concat(arr5, [3, 4])) // [1, 2, 3, 4]
arr5[Symbol.isConcatSpreadable] = false
console.log([].concat(arr5, [3, 4])) // [Array(2), 3, 4]

// 3. Symbol.species 对象的Symbol.species属性，指向一个构造函数。创建衍生对象时，会使用该属性
class myArray extends Array {
  static get [Symbol.species]() {
    return Array
  }
}

let a = new myArray()
a[0] = 1
a[1] = 2
a[2] = 3
let b = new Array()
console.log(a instanceof myArray) // true
console.log(a instanceof Array)   // true
let c: number[] = a.map(item => item + 1) // 创建衍生对象
console.log(c instanceof myArray) // false
console.log(c instanceof Array)   // true

// 4.Symbol.match
/* 
对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，
如果该属性存在，会调用它，返回该方法的返回值。 */
let obj6 = {
  [Symbol.match](string) {
    console.log(string)
    return 'hello world'.indexOf(string)
  }
}
console.log('e'.match(<any>obj6))
// 5.Symbol.replace
// 6.Symbol.search
// 7.Symbol.split
// 8.Symbol.iterator


// 9.Symbol.toPrimitive
/* 对象的Symbol.toPrimitive属性，指向一个方法。
该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。 */
/* Number：该场合需要转成数值
String：该场合需要转成字符串
Default：该场合可以转成数值，也可以转成字符串 */
let obj7 = {
  [Symbol.toPrimitive](type) {
    console.log(type)
  }
}
'1' + obj7  // default
1 * <any>obj7 // number


// 10.Symbol.toStringTag
/* 
对象的Symbol.toStringTag属性，指向一个方法。
在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，
它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。
也就是说，这个属性可以用来定制[object Object]或[object Array]中
object后面的那个字符串。 */

// 11.Symbol.unscopables
/* 对象的Symbol.unscopables属性，指向一个对象。
该对象指定了使用with关键字时，哪些属性会被with环境排除。 */
console.log(Object.keys(Array.prototype[Symbol.unscopables]))