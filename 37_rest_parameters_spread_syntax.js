// parameter
function sum(parameter1, parameter2) {
  console.log(parameter1 + parameter2);
}

sum(argument1, argument2);

// argument
function family(name) {
  console.log(arguments);
}

family();
// {}

function family(name) {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
}

family("Suji", "Minji", "Lucky");
// { '0': 'Suji', '1': 'Minji', '2': 'Lucky' }
// 3
// Suji

// rest parameters
function family(name) {
  console.log(name);
}

family(); // undefined
family("Suji", "Minji", "Lucky"); // suji

function family(...name) {
  console.log(name);
}

family(); // []
family("Suji", "Minji", "Lucky");
// [ 'Suji', 'Minji', 'Lucky' ]

//rest parameters examples

// forEach()
function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  console.log(result);
}

//reduce()
add(1, 2, 3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

function add(...numbers) {
  let result = numbers.reduce((prev, cur) => prev + cur);
  console.log(result);
}

add(1, 2, 3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// constructor function
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skill = skills;
}

const user1 = new User("Mike", 10, "html");
const user2 = new User("Tom", 20, "html,css");
const user3 = new User("Jane", 30, "English", "React");

console.log(user1);
// User { name: 'Mike', age: 10, skill: [ 'html' ] }
console.log(user2);
// // User { name: 'Tom', age: 20, skill: [ 'html,css' ] }
console.log(user3);
// User { name: 'Jane', age: 30, skill: [ 'English', 'React' ] }

// spread syntax - array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr2, ...arr1];
console.log(result); // [ 4, 5, 6, 1, 2, 3 ]

// spread syntax - object
let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = { ...user, ...info, skills: [...fe, ...lang] };
console.log(user);
// { name: 'Mike',
//   age: 30,
//   skills: [ 'JS', 'React', 'Korean', 'English' ] }
