/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-12-03 10:22:29
 * @LastEditTime: 2021-12-03 10:32:07
 */
// 参数可选
function foo(x: number, y?: number) {
  return x
}

// 参数默认值
function bar(x: number, y: number = 100) { }
console.log('foo(2, 3): ', foo(2, 3));
console.log('foo(3): ', foo(3));


function sum(...data: number[]) {
  console.log('data: ', data);
  let res = 0
  data.forEach(item => {
    res += item
  })
  console.log(res);
}

sum(1, 2, 3, 4)