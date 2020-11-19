/*  ORGANIZE DATA
    
    < Array와 Object의 차이점 >

    Array 
    - create : []
    - access : array[0]

    Object : 각 value에 이름을 줄 수 있음
    - create : {}
    - access : object.key
    - change : object.key = value
*/


// Array
const dogInfoArray = ["Lucky", 5, "Male", "Suwon"]

console.log(dogInfoArray);


// Object
const dogInfoObject = {
    name: "Lucky",
    age: 5,
    gender: "Male",
    city: "Suwon",
    registration: true
}

console.log(dogInfoObject);
console.log(dogInfoObject.gender); // Male

dogInfoObject.age = 6
console.log(dogInfoObject); // {age: 6}

// array and object INSIDE Object
const dogInfo = {
    name: "Lucky",
    age: 5,
    gender: "Male",
    city: "Suwon",
    registration: true,
    favorites: ["catch ball", "apple", "dog chew"], // array
    family: [{ // 1 array of 2 objects
            father: "yong",
            mom: "sun",
            sister: "suji",
            brother: "honey"
        },
        {
            sister: "minji",
            brother: "yup"
        }
    ]
}

console.log(dogInfo);
console.log(dogInfo.family[0].sister)