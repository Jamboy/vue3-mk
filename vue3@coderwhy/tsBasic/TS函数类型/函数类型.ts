/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-12-03 09:41:09
 * @LastEditTime: 2021-12-03 10:08:04
 */
function foo() { }

type FnType = () => void

function bar(fn: FnType) {
  fn()
}

bar(foo)

// add: (x: number, y: number) => number
// 参数类型=>返回值类型

// 函数实现
// function (x: number, y: number): number {
//   return x + y
// }

// function add1(x, y) {
//   return x + y
// }

// let add2 = function (x, y) {
//   return x + y
// }

function add3(x: number, y: number): number { return x + y }

const add4 = function (x: number, y: number): number { return x + y }

const add: (x: number, y: number) => number
  = function (x: number, y: number): number {
    return x + y
  }

type FnAddType = (x: number, y: number) => number

const add5: FnAddType = (x: number, y: number) => {
  return x + y
}

console.log(add5(1,2));
export { }