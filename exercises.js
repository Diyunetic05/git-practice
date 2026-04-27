console.log("JavaScript Core Practice Started");
let a = 10;
const b = 20;
var c = 30;
console.log(a, b, c);
function add(x, y) {
    return x + y;
}
console.log(add(5, 3));
const multiply = (x, y) => x * y;
console.log(multiply(4, 2));
let n = "Diya";
console.log(`Hello ${n}`);
const user = { name: "Amit", age: 21 };
const { name, age } = user;
console.log(name, age);
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);
function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));
const user2 = {};
console.log(user2?.address?.city);
let value = null;
console.log(value ?? "Default Value");
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);