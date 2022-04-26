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


/* await을 이용해 pickFruits() 함수를 리팩토링
1.  getApple()로 사과를 받고
2. getBanana()로 바나나를 받고,
3. 최종적으로 🍎+🍌 사과+바나나를 반환 */

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
    
}