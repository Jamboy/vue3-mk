/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-12-03 10:39:48
 * @LastEditTime: 2021-12-03 10:52:51
 */

function sum(x: string, y: string): string;
function sum(x: number, y: number): number;
function sum(x: any, y: any): any {
  return x + y
}

console.log(sum(1, 2));
console.log(sum('1fsdaf', 'fsadf'));

// function getLength(x: string): number;
// function getLength(x: any[]): number;

// function getLength(x: any): number {
//   return x.length
// }

function getLength(x: string | any[]):number {
  return x.length
}


console.log(getLength([1,23]));
console.log(getLength('111'));

export { }