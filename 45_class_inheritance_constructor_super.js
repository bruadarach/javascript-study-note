// super = Reference to the parent class (super class)
//         Very similar to "this" keyword
//         Can use a super classes: constructor, methods
 
class Person{
 
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    hello(){
      console.log("Hello",this.name);
      console.log("You are",this.age,"years old");
    }
  }
   
  class Student extends Person{
    
    constructor(name, age, gpa){
      super(name, age);
      this.gpa = gpa;
    }
    welcome(){
      super.hello();
      console.log("Your gpa is", this.gpa);
    }
  }
  
  class Teacher extends Person{
   
    constructor(name, age, classSize){
      super(name, age);
      this.classSize = classSize;
    }
    welcome(){
      super.hello();
      console.log("Your class size is", this.classSize);
    }
  }

let student = new Student("Steve", 25, 4.0);
console.log(student) // Person { name: 'Steve', age: 25 }
console.log(student.name) // Steve
console.log(student.age) // 25
console.log(student.gpa) //  4
console.log(student.welcome())
// Hello Steve
// You are 25 years old
// Your gpa is 4

let teacher = new Teacher("Bob", 45, 30);
console.log(teacher) // Person {name: 'Steve', age: 21}
console.log(teacher.name) // Bob
console.log(teacher.age) // 45
console.log(teacher.classSize) // 30
console.log(teacher.welcome())
// Hello Bob
// You are 45 years old
// Your class size is 30




/* MDN 공식 문서 방법대로 상속 */
class Grub {

  constructor(age, color, food) { // constructor()안에 프로퍼티들 선언합니다.
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }

  // 메서드
  eat() {
    return 'Mmmmmmmmm ' + this.food;
  }
};

class Bee extends Grub {
  constructor(age, color, food, job) { // 전체 프로퍼티 선언
    super(age,color,food) // 부모로부터 상속받은 프로퍼티만 선언

		this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

class HoneyMakerBee extends Bee {
  constructor(age, color, food, job, honeyPot) { // 전체 프로퍼티 선언
    super(age, color, food, job); // 부모클래스로부터 상속받은 프로퍼티만 선언

    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}

class ForagerBee extends Bee {
  constructor(age, color, food, job, canFly, treasureChest) {
    super(age, color, food, job);

    this.age = 10;
    this.canFly = true;
    this.job = 'find pollen';
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}


/* constructor()과 super() 안에 프로퍼티를 따로 선언안해도 무방함 */
class Grub {
  constructor() { 
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }

  eat() {
    return 'Mmmmmmmmm ' + this.food;
  }
}

class Bee extends Grub {
  constructor() { 
    super(); 

    this.age = 5;
    this.job = 'Keep on growing';
    this.color = 'yellow';
  }
}

class HoneyMakerBee extends Bee {
  constructor() { 
    super();

    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}


class HoneyMakerBee extends Bee {
  constructor() { // 전체 프로퍼티 선언 안해도 무방
    super(); // 부모클래스로부터 상속받은 프로퍼티들 선언 안해도 무방

    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

	// 메소드
  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}


/* ES6 문법 - class */

// 부모 클래스
class Person{
  constructor(name, age){ // 프로퍼티 추가
    this.name = "Sujeong";
    this.age = 20;
  }

	// 메소드 추가
  hello(){
    console.log("Hello",this.name);
    console.log("You are",this.age,"years old");
  }
};
 
// 자식 클래스
class Student extends Person{
  constructor(name, age, gpa){ // 프로퍼티 추가
    super(name, age); // 부모 클래스의 프로퍼티 상속

    this.gpa = 90; // 자식 클래스에 새로운 프로퍼티 추가
  }
	
	// 메소드 추가 : 메소드 오버라이딩
  welcome() {
    super.hello(); // 부모 클래스의 메소드 상속
    console.log("Your gpa is", this.gpa);
  }
};


/* ES5 문법 - Pseudoclassical */

// 부모 클래스
function Person(name, age) { // 프로퍼티 추가
    this.name = "Sujeong";
    this.age = 20;
};

// 메소드 추가
Person.prototype.hello = function () {
  console.log("Hello",this.name);
  console.log("You are",this.age,"years old");
}

// 자식 클래스
function Student(name, age, gpa) {// 프로퍼티
    Person.call(this, name, age); // 부모 클래스의 프로퍼티 상속

    this.gpa = 90; // 자식 클래스에 새로운 프로퍼티 추가
};
	
Student.prototype = Object.create(Person.prototype); // 부모 클래스의 상속하기 // MyChild.prototype = new Person();
Student.prototype.constructor = Student; // 생성자 설정

/* 아래 코드도 이 대체 가능 => Student.prototype.constructor = Student; */
// Object.defineProperty(Student.prototype, 'constructor', { 
//   value: Student, 
//   enumerable: false, // so that it does not appear in 'for in' loop
//   writable: true 
// });

// 메소드 추가 : 메소드 오버라이딩
Student.prototype.welcome = function () { // welcome() 메서드를 추가한다.
  Person.prototype.hello.call(this); // call() 을 이용해 부모 클래스의 hello()메서드를 호출한다.
  console.log("Your gpa is", this.gpa); // 확장하려는 기능을 추가한다.
};

