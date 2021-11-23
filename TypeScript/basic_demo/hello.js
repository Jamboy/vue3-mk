/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-22 16:14:22
 * @LastEditTime: 2021-11-23 15:39:52
 */
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// let fibonacci1: number[] = [1, '1', 2, 3, 5];
// let fibonacci: Array<number> = [1, 1, 2, 3, 5];
// let fibonacci: Array<number> = [1, 1, 2, 3, '5'];
function sum() {
    // let args: likeArray = arguments;
    var args = arguments;
}
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', 'Cat');
var cat = buildName(undefined, 'Cat');
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
var a = [];
push(a, 1, 2, 3);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
// let b = new Animal('Jack');
// console.log(b.name);
// b.name = 'Tom';
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
console.log('copyFields: ', copyFields(x, { b: 10, d: 20 }));
