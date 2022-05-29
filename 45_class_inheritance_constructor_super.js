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
