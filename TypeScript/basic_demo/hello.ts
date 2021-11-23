/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-11-22 16:14:22
 * @LastEditTime: 2021-11-23 17:28:13
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


class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

// let b = new Animal('Jack');
// console.log(b.name);
// b.name = 'Tom';


function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
      target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });
console.log('copyFields: ', copyFields(x, { b: 10, d: 20 }));
