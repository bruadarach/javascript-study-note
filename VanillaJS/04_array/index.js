// 데이터를 어떻게 정렬할까? 


// How to set a variable name :
// Start variable name in a lower case
// Instead of space, use an upper case
const monday = "Mon";
const tuesday = "Tue";
const wednesday = "Wed";
const thursday = "Thu";
const friday = "Fri";
const saturday = "Sat";
const sunday = "Sun";

// However, print them all, but not an efficient way to do
console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday);

// Now, let's create an array
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 1, -.5, true];
console.log(dayOfWeek)
console.log(dayOfWeek[2]); // Wed 

// Can we put a variable into an array? YES!
const dog = "Lucky"

const mydog = [dog, "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 1, -.5, true];
console.log(mydog)