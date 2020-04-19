// ts类
// 1 基本用法
class A {
  public name: string
  private age: number
  protected gender: string
  constructor(name: string, age: number, gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  public sayHello() {
    return `my name is ${this.name}`
  }
}
let aClass = new A('litokele', 18, 'male')
// aClass.sayHello()
// console.log(aClass)
// console.log(aClass.name) // litokele
// console.log(aClass.age)  // no
// console.log(aClass.gender)  no

// 2. 继承
class B extends A {
  public size: number
  constructor(name: string, age: number, gender: string, size: number) {
    super(name, age, gender)
    this.size = size
  }
  public sayHello() {
    // this.age private属性不能访问
    return this.gender // 这里继承的gender是protected 在子类中可以访问
  }
}
let bClass = new B('litokele', 18, 'male', 18)
// console.log(bClass)
// console.log(bClass.age) Property 'age' is private and only accessible within class 'A'.
// console.log(bClass.gender) Property 'gender' is protected and only accessible within class 'A' and its subclasses.


/* 注意：TypeScript 使用的是结构性类型系统，所以当比较两种不同的类型时，如果所有的成员的类型都是兼容的，那么这两个类型就是兼容的 */
class C {
  public prop: string
}
class D {
  public prop: string
}
let c1: C = new D() // ok

class C2 {
  private prop: string
}
class D2 {
  private prop: string
}
// let c2: C2 = new D2() // not ok
class X extends C2 { }
let c2: C2 = new X()  // ok

// 3.readonly
class E {
  public readonly prop: string
  constructor(prop: string) {
    this.prop = prop
  }
  public changeProp() {
    // this.prop = 'xxx'
    // Cannot assign to 'prop' because it is a read-only property
  }
}

// 4.参数属性
// 参数属性允许同时创建和初始化成员，可以把声明和赋值合并至一处，如
class F {
  constructor(public name: string, public age: number) {
    this.name = name
    this.age = age
  }
}

// 5.存取器
/*
TypeScript 支持 getter 和 setter，但是有一点限制：
编译器输出必须设为 ES5 或者更高，不支持降级到 ES3，另外，
当一个存取器只带有 get 却不带有 set 时，它会被自动推断为 readonly。
 */
class G {
  public name: string
  public age: number
  private _helloWorld: string
  constructor(name: string, age: number, _hellpWorld: string) {
    this.name = name
    this.age = age
    this._helloWorld = _hellpWorld
  }
  get sayHello() {
    return this._helloWorld
  }
  set sayHello(val) {
    this._helloWorld = val
  }
}
let g = new G('li', 18, 'hello world')
// console.log(g.sayHello)
g.sayHello = 'xxx'
// console.log(g)

// 6.静态属性
// 只能通过类名获取，实例不能获取
class H {
  static desc: string = 'i am a static prop'
}

// 7.抽象类
/*
抽象类只能作为其他派生类的基类使用，抽象类不能被实例化，它具有如下特点
抽象类可以包含成员的实现细节，且抽象类必须用 abstract 声明
抽象类里不含方法体的方法称为抽象方法，使用 abstract 声明，
抽象方法必须被子类实现（抽象方法必须使用 abstract 关键字声明，
且可以包含访问修饰符
*/
abstract class I {
  private prop: string
  constructor(prop: string) {
    this.prop = prop
  }
  abstract sayHello(): string
  abstract sayProp(): string
}

class ChildOfI extends I {
  public name: string
  constructor(prop: string, name: string) {
    super(prop)
  }
  public sayHello() {
    return this.name
  }
  public sayProp() {
    return 'prop 是父类的 private属性我获取不到啊 可惜'
  }
}

//  8.把类当作接口
class Person {
  public name: string;
  public age: number;
}
interface Man extends Person {
  love: string;
}
let me: Man = {
  name: 'funlee',
  age: 18,
  love: 'TS'
}
// 9. 用类实现接口
interface InterfaceJ {
  name: string
  age: number
}
class J implements InterfaceJ {
  public name: string
  public age: number
}

/*
interface:接口只声明成员方法，不做实现。
class:类声明并实现方法。 */
/* https://segmentfault.com/a/1190000015068063: ts中interface和class 的区别 */

// 10. interface:接口只声明成员方法，不做实现
interface PointInterface {
  x: number
  y: number
  sayPosition(): void
}
class Point implements PointInterface {
  public x: number
  public y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  public sayPosition() {
    console.log(this.x, this.y)
  }
}

// class A extends B implements C,D,E 实现多个接口

// 11.泛型
const xx = <T>(constructor: new () => T): T => {
  return new constructor()
}
class Xx {
  public name: string
}
xx<Xx>(Xx)