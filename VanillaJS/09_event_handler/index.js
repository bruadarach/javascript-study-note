/*  
    자바스크립트는 이벤트에 반응하기 위해 만들어짐 

    Event : Anything happens on Website
            e.g) click, resize, submit, input, change, load, etc. 
            => 우리는 이벤트를 가로챌 수 있어! 

*/

const titleId = document.querySelector("#title"); // #는 id로 선택한다는 뜻
titleId.innerHTML = "Hello, from index.js"; // working! 
titleId.style.color = "blue ";


/* 
    이벤트 가로채기 
        - (1) function with argument
        - (2) function without argument     
*/


/* (1) function without argument */
function handleResize() {
    console.log("I have been resized");
}

// window는 resize라는 이벤트를 갖고 있어 (=resize가 발생할 수 있음)
// listen to event : 어떤 이벤트를 받기를(발생하기를) 기다리는 것

// addEventListener(조건, 처리방법)
// addEventListener(이벤트 받을(발생) 내역, 이벤트(발생하면) 다룰(사용할) 함수)
window.addEventListener("resize", handleResize);
//                                  handleResize()라고 쓰지 않아! 
//                                  이유: handleResize()라 쓰면 지금 바로 호출하라는 의미
//                                  우리는 이 기능 사용이 필요할 때 호출할 예정이라 ()쓰지 않아!
// 결과 => 이벤트 1개를 들었음



/* (2) function with argument 
        : 이벤트를 다룰 함수를 만들때 마다 자바스크립트는 자동적으로 이벤트객체를 함수에 붙임 */
function handleResize(event) {
    console.log(event);
}

window.addEventListener("resize", handleResize(event));
//                                  handleResize()라고 쓰지 않아! 
//                                  결과 => 이벤트가 발생할 때 마다, 이벤트객체가 호출됨



/* (3) function with argument
        : 누군가 타이틀을 클릭할 때 마다, 타이틀 색깔이 기존 파랑 -> 흰색 으로 변할꺼야 */
const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "yellow";
}

title.addEventListener("click", handleClick);
// 결과 => Inpect창의 HTML 파일을 보면, color: yellow로 변경되었어! 
// 문제 => 한번 클릭해서 노란색으로 바뀌면, 그 상태로 머물러 있게 됨