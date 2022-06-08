/*
    throw "에러"              <- 일단 예제 작성을 편의성을 위해 이렇게 적어줌. 원래는 new Error('error message) 쓰는 것이 일반적임
    
    throw 에러객체
    throw new Error('에러')   <- 에러 객체에는 해당하는 Call Stack 정보가 담김! 
*/

function sum (x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw '숫자가 아닙니다.'
    }
    return x+y;
}

console.log(sum('a',2)) // Uncaught 숫자가 아닙니다.


/*
    try {  
        예외가 발생할수도 있는 코드
    } catch(e){ // catch()안에 에러가 담겨 
        console.log(e)
    }
*/


/* 기본 코드 */
function f2() {
    console.log('f2 start');
    console.log('f2 end')
}

function f1() {
    console.log('f1 start')
    f2()
    console.log('f1 end')
}

console.log("시작")
f1()
console.log("끝")
// 시작
// f1 start
// f2 start
// f2 end
// f1 end
// 끝


/* 에러를 던져봅니다. */
/* 에러가 던져지고 처리가 되지 않으면 코드는 이어지는 코드들의 실행의 처리를 멈추게 됩니다. */
function f2() {
    console.log('f2 start');
    throw '에러';
    console.log('f2 end')
}

function f1() {
    console.log('f1 start')
    f2()
    console.log('f1 end')
}

console.log("시작")
f1()
console.log("끝")
// 시작
// f1 start
// f2 start
// Uncaught 에러


/* try catch로 에러를 잡아봅니다. */
/* f2()에 에러처리를 해줍니다. */
/* 에러가 발생된 구간(f2())의 코드를 실행하지 않고 넘어간 다음, 이어지는 코드들은 정상 실행합니다.  */
function f2() {
    console.log('f2 start');
    throw '에러';
    console.log('f2 end') // 실행 안됨 
}

function f1() {
    console.log('f1 start')
    try {
        f2() // 에러가 날 것 같은 곳에 try catch로 에러를 처리해줍니다. // 이 구간까지 발생된 에러는 catch구문으로 넘어갑니다. 
    } catch(e) {
        console.log(e);
    }
    console.log('f1 end')
}

console.log("시작")
f1()
console.log("끝")
// 시작
// f1 start
// f2 start
// 에러
// f1 end
// 끝


/* try catch로 에러를 잡아봅니다. */
/* f1()에 에러처리를 해줍니다. */
/* 에러가 발생된 구간(f2())의 코드를 실행하지 않고 넘어간 다음, 이어지는 코드들은 정상 실행합니다.  */
function f2() {
    console.log('f2 start');
    throw '에러'; // 에러 발생!!!
    console.log('f2 end') // 실행 안함
}

function f1() {
    console.log('f1 start')
    f2() 
    console.log('f1 end') // 에러 처리 안됨!! 실행 안함 
}

console.log("시작")
try {
    f1() // 이 구간(117번쨰 줄)까지 전달된 에러는 catch구문으로 넘어갑니다. 
} catch(e) { // 에러 캐치는 f1() 함수 실행 끝나고 돌아오는 길에 됩니다. 
    console.log(e)
}
console.log("끝") // 실행 됨.
// 시작
// f1 start
// f2 start
// 에러
// 끝


/* new Error('err') 에러 객체를 사용해봅시다. */
function f2() {
    console.log('f2 start');
    throw new Error('err'); // 에러 발생!!!
    console.log('f2 end') // 실행 안함
}

function f1() {
    console.log('f1 start')
    f2() 
    console.log('f1 end') // 에러 처리 안됨!! 실행 안함 
}

console.log("시작")
try {
    f1() // 이 구간(117번쨰 줄)까지 전달된 에러는 catch구문으로 넘어갑니다. 
} catch(e) { // 에러 캐치는 f1() 함수 실행 끝나고 돌아오는 길에 됩니다. 
    console.log(e)
}
console.log("끝") // 실행 됨.
// 시작
// f1 start
// f2 start
// Error: err                        <- 하단에 Call Stack이 보여집니다. 
//     at f2 (main.js:3:11)
//     at f1 (main.js:9:5)
//     at main.js:15:5
// 끝



/* 비동기 상황에서 예외처리 (1) */

/* Promise를 리턴하는 함수를 하나 만듭니다. */
/* Primise의 executor은 setTimeout()에 주어진 시간만큼 기다린 뒤, 함수를 실행합니다. */
/* 예외처리를 공부하기 위해 reject로 설정했습니다. */
/* Uncaught (in promise) error! 라는 에러가 발생했습니다. */

function wait(sec) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('error!')
        }, sec*1000)
    })
}

// 호출해 봅시다
wait(3) // new Promise(함수) // new Promise(function(resolve, reject) { setTimeout() })
// Promise {<pending>}
// Uncaught (in promise) error!         <- 에러가 뜹니다! 



/* 에러를 일반적인 try catch로 잡아봅시다. */
/*  에러가 잡히지 않습니다! */
/* 이유: 왜냐하면, wait(3)은 동기적인 코드 실행이 아니예요! 
        그래서 예외를 발생하는 타이밍이, 싸고있는 타이밍이 try가 싸고있는 코드가 실행되는 타이밍이 아니라 
        나중에 새로운 콜스택이 비었을 때, 타이머가 queue에 넣고, 그 새로운 Call Stack에 새로운 내용이 쌓인걱 때문에
        이 try구문에서 catch가 되지 않는 것입니다! 
        
    해결: 그래서 Promise의 예외 처리는 try catch로 싸는게 아니라, 
         Promise의 catch를 이용해서 비동기함수가 실행되는 동안에 잡아주면 됩니다. 
 */
function wait(sec) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('error!')
        }, sec*1000)
    })
}

try{
    wait(3)
} catch(e) {
    console.error(e);
}
// Promise {<pending>}
// Uncaught (in promise) error!         <- 에러가 잡히지 않습니다!



/* 에러를 Promise의 .catch()로 잡아봅시다. */
/* 에러가 잡아집니다! */
function wait(sec) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('error!')
        }, sec*1000)
    })
}

wait(3).catch((e) =>  {console.log(e)})
// Promise {<pending>}
// error!



/* Promise Chaining */
/* then()은 계속 체이닝을 할수 있는데, .catch()는 예외처리를 잡았고 다시 발생할 에러가 없다면 체이닝을 굳이 안합니다. */
/* 일반적인 체이닝은 보통 "같은 객체"를 계속해서 리턴해주지만,
   Promise의 체이닝은 보통 체이닝이랑 다르게, 첫번째 catch를 겪고 나온 Promise랑, 두번쨰 catch를 겪고 나온 Promise가 서로 다릅니다! */
function wait(sec) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('error!')
        }, sec*1000)
    })
}

wait(3) 
    .catch((e) =>  {console.log('1st catch', e)}) // wait(3)으로부터 리턴된 Promise는 executor의 실행 상태를 나타내는 Promise임
    .catch((e) =>  {console.log('2nd catch', e)}) // 여기서 리턴된 Promise는 wait(3)랑은 전혀 상관 없는 것이고, 
                                                  // 246번줄의 catch 자체의 행동이 제대로 실행됐는지에 해당하는 Promise임. 
                                                  // === 앞의 catch를 수행하는 동안 예외가 발생했는지 아닌지를 보는 Promise임.
                                                  // 위에서 정상작동 했으니 예외가 발생되지 않았으니 catch가 호출되지 않은 것임. 오히려 .then이 실행되겠지
// Promise {<pending>}
// 1st catch error!



/* 그래도 .catch()의 2번째 체이닝을 해보고 싶다면? */
/* 첫번째 .catch()에서 throw 에러를 해주면 되겠네 */
function wait(sec) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('error!')
        }, sec*1000)
    })
}

wait(3) 
    .catch((e) =>  {
        console.log('1st catch', e)
        throw 'error!!!!!!' // 여기서 또 에러가 발생한다면, 예외가 발생한거니가, 다음 .catch()가 에러를 잡고 실행이 되겠네.
    }) 
    .catch((e) =>  {console.log('2nd catch', e)})
// Promise {<pending>}
// 1st catch error!
// 2nd catch error!!!!!!



/* .then()으로도 에러처리 가능해! */
/* .then()은 onfulfilled, onrejected 라는 2가지 파리미터를 넘길 수 있습니다. */
function wait(sec) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('error!')
        }, sec*1000)
    })
}

wait(3) 
    .then(() => {
        console.log('done!!!!'); // .then()의 첫번째 매개변수 onfulfilled 작동! 
    }, (e) => {console.log('1st catch in Then',e)}) // .then()의 첫번째 매개변수 onfulfilled 작동! // then의 2번쨰 파라미터인 onreject 함수가 에러를 처리했습니다. 
    .catch((e) =>  {console.log('2nd catch', e)}) // 애는 앞의 then에 주어진 동작이 정상적으로 작동했는지 볼텐데, 에러처리 잘하고 예외처리할 것이 없으니까 실행이 안되고 끝나
// Promise {<pending>}
// 1st catch in Then error!



/* 마지막으로, async / await의 예외 처리를 알아봅니다. */
async function myAsyncFun() {
    return 'done'; // === resolve('done!');
}

const result1 = myAsyncFun(); // 호출은 동일하지만, 변수에 넣어서 찍어보면 Promise가 리턴됨
result1 // Promise {<fulfilled>: 'done!'}

/* 위와 같은 코드를 new Promise로 만들면? */
function myPromiseFun() {
    return new Promise((resolve, reject) => {
        resolve('done!');
    })
}

const result2 = myPromiseFun(); 
result2 // Promise {<fulfilled>: 'done!'}


/* Promise에 에러 발생시켜보자: myPromiseFun */
function myPromiseFun() {
    return new Promise((resolve, reject) => {
        reject('myError!');
    })
}

const result2 = myPromiseFun(); 
result2 
// Promise {<rejected>: 'myError!'}
// Uncaught (in promise) myError!


/* async 함수에서는 에러 발생 어떻게 하지?: myPromiseFun */
/* throw 에러 */
async function myAsyncFun() {
    throw 'myAsyncError!'; // === resolve('done!');
}

const result1 = myAsyncFun(); // 호출은 동일하지만, 변수에 넣어서 찍어보면 Promise가 리턴됨
result1 
// Promise {<rejected>: 'myAsyncError!'}
// Uncaught (in promise) myAsyncError!



/* async 함수에서는 에러 어떻게 잡지?: Promise를 반환하니까 Promise가 하는 방식으로 잡으면 됩니다. .catch() */
async function myAsyncFun() {
    throw 'myAsyncError!'; // === resolve('done!');
}

function myPromiseFun() {
    return new Promise((resolve, reject) => {
        reject('myError!');
    })
}

const result1 = myAsyncFun().catch((e) => { console.log(e)}) 
// myAsyncError!
const result2 = myPromiseFun().catch((e) => { console.log(e)})
// myError!

result1 // Promise {<fulfilled>: undefined}
result2 // Promise {<fulfilled>: undefined}



/* await은 async함수 안에서만 사용할 수 있습니다. */
/* await은 Promise를 기다릴 수 있는 아이입니다. */


