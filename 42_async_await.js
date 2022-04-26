/*
    async, await
    : promise를 간결하고 동기적으로 실행되는 것처럼 되도록 도와줌  
*/

// async & await
// clear style of using promise :) 



// promise로 작성한 코드.
function fetchUser() {
    // 네트워크가 대충 잇다치고 10 초후에 soonmac을 출력
    return new Promise((resolve, reject)=>{
        resolve('soonmac');
    });
}

/*
Promise가 뭔가요? : 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트.
new Promise((resolve,reject) => {...})

resolve: 정상적으로 작동되면 데이터를 전달
reject: 실패
*/


/* async를 이용해 작성한 코드.
- async는 function 앞에 씀.
- async는 항상 Promise를 반환함. 
- Promise가 아닌 값을 반환하더라도, Promise가 이행되어서 resolved된 값으로 쳐줌. 
- 따라서,Promise 객체를 만들어서 resolve 함수를 일일이 써줄 필요가 없음! 
*/
async function fetchUser() {
    return "soonmac";
  }

// then을 써서 delay 함수가 다 끝날 때까지 기다린 후 바나나를 반환하는 getBanana() 함수
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function getBanana() {
      return delay(3000)
      .then(()=> '🍌')
    // 3초 후(then) 바나나를 반환!
  }

/* await 사용한 코드
- await은 async 함수 안에서만 작동함. 
- await은 함수가 끝날 때 까지 기다리는 역할 (then와 같음)
- Promise가 처리되는 동안에는 다른 스크립트를 실행하거나 이벤트를 처리하기 때문에(비동기) 안심해도 됨 */
  async function getBanana() {
    await delay(1000); //delay 함수가 다 끝날 때 까지 기다림
    return "🍌";
  }

/* await을 사용하지 않은 코드 
1.  getApple()로 사과를 받고
2. getBanana()로 바나나를 받고,
3. 최종적으로 🍎+🍌 사과+바나나를 반환 */

async function getApple() {
    await delay(2000);
    return "🍎";
  }
  
  async function getBanana() {
    await delay(1000);
    return "🍌";
  }
  
  function pickFruits() {
    return getApple().then((apple) => {
      return getBanana().then((banana) => `${apple} + ${banana}`);
    });
  }

pickFruits().then(console.log);


/* await을 이용해 pickFruits() 함수를 리팩토링한 코드 
1. apple이란 상수를 만들어서 getApple()이 끝날 때 까지 기다린 후 사과를 받기.
2. 같은 방법으로 banana 상수를 만들어서 바나나를 받기.
3. 그리고 apple + banana를 반환 */

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;  
}

pickFruits().then(console.log);

/* 동시다발적으로 Promise를 실행
- 사과, 바나나를 순서대로 기다리는 건 너무 비효율적
- 둘이 동시에 진행

1. applePromise, bananaPromise 상수에 각각 getXXX() 함수 넣기.
2. 즉시 Promise 객체가 생성되고, Promise 안의 코드가 진행됨. 
3. apple과 banana에 동기화.
4. Promise가 다 끝날 때 까지 await 하기
5. 두개 합치기 */ 

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    // 상수에 할당해서 프로미스 두개 바로 만들게해서 프로미스 안의 코드 진행시키고 
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;   
}

pickFruits().then(console.log);


// Promise API
// Promise.all - 동시다발적(병렬적)으로 Promise를 실행
// Promise.all( [ a, b ] ) : a,b 값이 다 모일 때까지 기다림
function pickAllFruits() {
    //Promise.all 배열에 전달된 프로미스 값이 다 모일 때까지 존버함
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(" + "));
}
pickAllFruits().then(console.log)
// 결과값 : 🍎+🍌


// Promise.race - 가장 빨리 리턴된 값만 전달
// Promise.race( [ a, b ] ) : 배열에 전달된 프로미스 중에서 가장 빨리 리턴된 값만 전달됨
function pickOnlyOne() {
    //Promise.race : 배열에서 전달된 프로미스 중에서 가장 빨리 리턴된 값만 전달됨
    return Promise.race([getApple(), getBanana()])
}
//참고로 바나나의 딜레이는 1초 사과의 딜레이는 2초다.
pickOnlyOne().then(console.log) 
//결과값 : 🍌