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

/* 추가 공부 */
function delay(sec, callback) {
    setTimeout(() => {
        callback(new Date().toISOString())
    }, sec*1000);
};

/* 1초 간격으로 잘 찍힘 */
// 1 '2022-05-31T01:42:41.292Z'
// 2 '2022-05-31T01:42:42.296Z'
// 3 '2022-05-31T01:42:43.300Z'


// 그런데 만약에 2번째 delay의 콘솔로그fmf 3번째 delay의 뒤에 위치한다면,
// 코드를 읽을 때, 어느 것이 먼저 실행되는지 단번에 알아차리기가 어려워, 가독성이 좋지 않다.
function delay(sec, callback) {
    setTimeout(() => {
        callback(new Date().toISOString())
    }, sec*1000);
};

delay(1, (result) => {
    console.log(1,result);
    
    delay(5, (result) => {

        delay(1, (result) => {
            console.log(3,result)
        })
     console.log(2,result);   
    })
})

/* 가독성 좋게 Promise 사용해서 바꿔보자 */
function delayP(sec) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString())
        }, sec*1000);
    });
}

delayP(1).then((result)=>{
    console.log(1,result);
});

/* Promise Chaining을 해보자 */
delayP(1).then((result)=>{
    console.log(1,result);
    // return에 다음 아이 추가해주세요!
    return delayP(1);
}).then((result)=>{
    console.log(2,result);
    // return에 다음 아이 추가해주세요!
    return delayP(1);
}).then((result)=>{
    console.log(3,result);
});
/* 1초 간격으로 잘 찍힘 */
// 1 '2022-05-31T01:42:41.292Z'
// 2 '2022-05-31T01:42:42.296Z'
// 3 '2022-05-31T01:42:43.300Z'


/* 만약에 마지막 아이 다음에 then(result)에는 뭐가 담기나요? 
마지막 3번째 로그가 찍힘과 "동시에" 4번째 콘솔로그(result)가 찍히는데 "undefined"입니다.  
*/

delayP(1).then((result)=>{
    console.log(1,result);
    return delayP(1);
}).then((result)=>{
    console.log(2,result);
    return delayP(1);
}).then((result)=>{
    console.log(3,result);
    // 여기서 아무것도 return 하지 않을 경우!
}).then((result)=>{ // then의 result값은 resolve가 된 promise일테고, 아무것도 리턴안했읕테니 바로 실행됨. 
    console.log(result); // resolve된 값이 없으므로, 결과값은 undefined 없는 것입니다.
});

// 1 '2022-05-31T01:57:32.549Z'
// 2 '2022-05-31T01:57:33.553Z'
// 3 '2022-05-31T01:57:34.557Z'
// undefined

delayP(1).then((result)=>{
    console.log(1,result);
    return delayP(1);
}).then((result)=>{
    console.log(2,result);
    return delayP(1);
}).then((result)=>{
    console.log(3,result);
    // 여기서 return을 해줄 경우!
    return 'WOW' // 이 리턴값은 promise의 resolve값으로 업데이트 됨
}).then((result)=>{ // then의 result값은 resolve가 된 promise일테고, "비동기 연산인 Promise를" 리턴하지 않았기 때문에 "바로 실행됨" 
    console.log(result); // resolve된 값 : Wow
});
// 1 '2022-05-31T01:57:32.549Z'
// 2 '2022-05-31T01:57:33.553Z'
// 3 '2022-05-31T01:57:34.557Z'
// 'WOW'


/* then() 안에서 undefined가 리턴되어도 이후의 then 체이닝이 계속 이루어지는건가요 ? YES! 이유: then은 promise를 리턴하기 때문에 ㅎ */
delayP(1).then((result)=>{
    console.log(1,result);
    return delayP(1);
}).then((result)=>{
    console.log(2,result);
    return delayP(1);
}).then((result)=>{
    console.log(3,result);
    // 여기서 아무것도 return 하지 않을 경우!
}).then((result)=>{ // then의 result값은 resolve가 된 promise일테고, "비동기 연산인 Promise를" 리턴하지 않았기 때문에 "바로 실행됨" 
    console.log(result); // resolve된 값이 없으므로, 결과값은 undefined 없는 것입니다.
}).then((result)=>{ // then의 result값은 resolve가 된 promise일테고, "비동기 연산인 Promise를" 리턴하지 않았기 때문에 "바로 실행됨" 
    console.log(result); // resolve된 값이 없으므로, 결과값은 undefined 없는 것입니다.
})

// 1'2022-05-31T02:50:12.141Z'
// 2 '2022-05-31T02:50:13.142Z'
// 3 '2022-05-31T02:50:14.146Z'
// undefined
// undefined

