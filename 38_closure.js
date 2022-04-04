function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add3 = makeAdder(3);
console.log(add3(2)); // 5

const add10 = makeAdder(10);
console.log(add10(5)); // 15 console.log(add3(1)); // 4

// Information hiding, Encapsulation
function makeCounter(x) {
  let num = 0; // Information hiding (은닉화, Encapsulation)
  return function () {
    return num++;
  };
}
let counter = makeCounter();
console.log(counter()); // 0 console.log(counter()); // 1 console.log(counter()); // 2

// a++는 기존의 값을 가진채로, 이후에 +1을 한다.
// ++a는 기존의 값에서, +1을 한 값을 가진다.
let a = 1;
let b = 1;
console.log(a++); // 1
console.log(++b); // 2
console.log(a); // 2
console.log(b); // 2

let num1 = 0;
num1++;
console.log(num1); // 1
let num2 = 0;
++num2;
console.log(num2); // 1
