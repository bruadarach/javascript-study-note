/* 

Promise: 

- 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트
- 정해진 기능 수행 후 성공 메시지와 함께 처리되 결과값을 리턴, 실패 시 에러 전달
- 미리 등록 시스템

*/


/* Promise is a JavaScript object for asychronous operation
    1) state : 상태에 대한 이해 필요 
        - pending -> fullfilled or rejected
        1
    2) Producer(프로듀서) VS. Consumer(소비자) 의 차이점 이해 필요

    3) Promise(성공콜백함수 등록, 실패콜백함수 등록)

    시간이 많이 걸리는 네트워크 통신이나 파일을 읽어서 오는 일들은 비동기적으로 처리하는 것이 좋음
*/


// 1. Producer
// When new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files...)
    console.log('doing something...') // doing something // 무조건 바로 리턴됨
    setTimeout(() => {
        resolve('suji'); // 성공시 출력할 것 미리 등록 
        reject(new Error('no network')) // 실패시 출력할 것 미리 등록 
    }, 2000);
})

// 2. Consumers: then, catch, finally
//    - then : 값을 바로 전달하거나 or 비동기인 promise를 전달 가능 
// value = 'suji' after being executed successfully. 
promise
.then((value)=> { // 성공시 호출됨
    console.log(value); // suji
})
.catch(error => { // 실패시 호출됨
    console.log(error);
})
.finally(()=>{
    console.log('finally');
}) // 성공,실패 상관없이 무조건 마지막에 호출됨


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // 1
});

fetchNumber 
.then(num => num * 2) // 2 
.then (num => num*3) // 6
.then(num => { // 6
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(num-1),1000); // 5
    });
})
.then (num=>console.log(num)); // 5 // 총 2초 소요됨 
// doing something...
// suji
// finally
// 5


// 4.1. Error Handling - 네트워크 '성공' 케이스 예제 
서버에서 닭, 달걀, 계란을 받아온다 가정. 
const getHen = () => new Promise((resolve,reject) => { // 암탉을 받아옴 
    setTimeout(()=>resolve('🐓'),1000);
});

const getEgg = hen => new Promise((resolve, reject) => { // 닭 -> 달걀 
    setTimeout(()=> {resolve(`${hen} => 🥚`)}, 1000);
});

const cook = egg => new Promise((resolve, reject) => { // 달걀 -> 계란프라이
    setTimeout(()=>resolve(`${egg} => 🍳`, 1000));
});

getHen().
then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
// // 🐓 => 🥚 => 🍳


// // 코드 축약 가능
getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log);
// 🐓 => 🥚 => 🍳


// 4.2. Error Handling - 네트워크 '실패' 케이스 예제 
// 서버에서 닭, 달걀, 계란을 받아온다 가정. 
const getHen = () => new Promise((resolve,reject) => { // 암탉을 받아옴 
    setTimeout(() =>resolve('🐓'),1000);
});

const getEgg = hen => new Promise((resolve, reject) => { // 닭 -> 달걀 
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // reject!!!
});

const cook = egg => new Promise((resolve, reject) => { // 달걀 -> 계란프라이
    setTimeout(()=>resolve(`${egg} => 🍳`, 1000));
});

getHen().
then(hen => getEgg(hen)) // 계란 받는 것에서부터 실패해서 요리가 완성할 수 없음
.then(egg => cook(egg))
.then(meal => console.log(meal));
// Uncaught (in promise) Error: error! 🐓 => 🥚


// 코드 축약 가능
getHen()
    .then(getEgg)
    .catch(error => { // 에러 핸들링! // 에러 처리로 대체해서 요리 완성 
        return `🏪`;
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
// 🏪 => 🍳


// 5. call back hell to promise

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'suji' && password === 'lucky') ||
                    (id === 'minji' && password === 'deoqua')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'suji') {
                    resolve({ name : 'suji', role : 'software engineer'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}
 
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
 
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)  //.then(user => UserStorage.getRoles(user))
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);


