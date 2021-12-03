/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-12-03 10:11:10
 * @LastEditTime: 2021-12-03 10:19:52
 */

function calc(x: number, y: number, fn: (n: number, z: number) => number) {
  return fn(x, y)
}

type FnCalcType = (x: number, y: number) => number

const add: FnCalcType = function (x: number, y: number): number {
  return x + y
}

const sub: FnCalcType = function (x: number, y: number): number {
  return x - y
}

const res1 = calc(1, 2, add)

const res2 = calc(1, 2, sub)

console.log(res1);
console.log(res2);

export { }