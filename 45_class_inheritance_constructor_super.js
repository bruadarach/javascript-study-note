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

