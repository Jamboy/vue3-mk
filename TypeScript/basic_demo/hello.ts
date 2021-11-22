/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-11-22 16:14:22
 * @LastEditTime: 2021-11-22 17:19:05
 */
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// let fibonacci1: number[] = [1, '1', 2, 3, 5];
// let fibonacci: Array<number> = [1, 1, 2, 3, 5];
// let fibonacci: Array<number> = [1, 1, 2, 3, '5'];

// interface NumberArray {
//   [index: number]: number;
// }
// let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// function sum() {
//   let args: number[] = arguments;
// }

interface likeArray {
  [index: number]: number;
  length: number;
  callee: Function;
}

function sum() {
  // let args: likeArray = arguments;
  let args: IArguments = arguments;
}

function buildName(firstName: string = 'Tom', lastName?: string) {
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');

function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

//重载
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

let a = [];
push(a, 1, 2, 3);