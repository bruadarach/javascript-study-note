/*  
    1. What is 'console' ? 

        1.1. Both are OBJECT! (focusing on .dot)
            -   console.log = Object
            -   dogInfo.name = Object

            1.1.1. What is 'console' ?
                : 'console' is a bigger OBJECT than dogInfo object! :) 

            1.1.2. What is '.log()' ? 
            : '.log()' is a FUNCTION of a 'console' object

    2. How to create a 'function' in Javascript?

    3. How to pass 'argument' 

    4. String formatting
        - using ( , )
            - auto spacing
        - using (+)
            - manual spacing
        - using (``)
            - using ${}

    5. return 
        : return a value from a function

    6. practice 1
        : put function into a 'VALUE' of a dictionary
*/


// array and object INSIDE Object
const dogInfo = {
    name: "Lucky",
    age: 5,
    gender: "Male",
    city: "Suwon",
    registration: true,
}

console.log(dogInfo.name); // Lucky


// What is 'console'?
console.log(console);
console.log(console, dogInfo);


// function 1 : Basic
function sayHello1() {
    console.log('Hello!');
}

sayHello1(); // 'Hello!'


// function 2 : Argument/Parameter 외부에 있는 데이터를 읽는 함수를 만드는 방법
function sayHello2(name) { // argument, parameter : (name)을 통해서 전달 받음
    console.log('Hello!', name); // 'Hello! Lucky' // (,) format provides auto empty space
}

sayHello2("Lucky");


// function 2 - error case
function sayHello3(name) { // 내 function은 숫자 5을 받을 준비가 안되있어.
    console.log('Hello!', name);
}

sayHello3("Lucky", 5); // 'Hello! Lucky' // 6은 안나와. 왜냐하면 argument/parameter 5을 받을 자리가 없어  


// function 2 - error fixed
function sayHello4(name, age) {
    console.log("Hello!", name, "Age:", age);
}
sayHello4("Lucky", 5); // 'Hello! Lucky Age: 5'


// function 3 - improved the way to write the String result with +
function sayHello5(name, number) {
    console.log("Hello! " + name + ", your favorite number is " + number);
} // don't forget SPACING!!! 

sayHello5("Suji", 777) // 'Hello! Suji, your favorite number is 777'


// function 3 - improved the way to write the String result with ``
function sayHello6(name, number) {
    console.log(`Hello! ${name}, your favorite number is ${number}`);
}

sayHello6("Suji", 777) // 'Hello! Suji, your favorite number is 777'


// function 4 : return - error case
function sayHello7(name, number) {
    console.log(`Hello! ${name}, your favorite number is ${number}`);
}

const greetSuji = sayHello7("Suji", 777)
console.log(greetSuji) // undefied


// function 4 : return - error fixed
function sayHello8(name, number) {
    return `Hello! ${name}, your favorite number is ${number}`;
}

const greetSuji2 = sayHello8("Suji", 777)
console.log(greetSuji2) // 'Hello! Suji, your favorite number is 777'


// function 5 : put function into a 'VALUE' of a dictionary
const calculator = {
    plus: function(num1, num2) { /////? 'plus'라 해야하지 않나? 
        return num1 + num2
    },
    minus: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    },
    power: function(num1, num2) {
        return num1 ** num2
    }
}

const plus = calculator.plus(2, 4);
const minus = calculator.minus(2, 4);
const multiply = calculator.multiply(2, 4);
const divide = calculator.divide(2, 4);
const power = calculator.power(2, 4);

console.log(plus) // 6
console.log(minus) // -2
console.log(multiply) // 8
console.log(divide) // 0.5
console.log(power) // 16