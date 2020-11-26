/*  
    자바스크립트 이벤트(addEventListener)의 종류 모음
        : https://developer.mozilla.org/en-US/docs/Web/Events
*/

// 
const title = document.querySelector('#title'); // (id) title
const body = document.querySelector('body');

// variable name Uppercase!
const BASE_COLOR = "white"; // yellow 
const OTHER_COLOR = "#f7cac9"; // pink
const BODY_BASE_COLOR = "lightblue";
const BODY_OTHER_COLOR = "black";

//let's kill CSS working
// (1) 누구든 document elelemtn인 <h1> id=title을 클릭할 떄 마다, 글자 색깔이 바뀜
function handleClick() {
    const currentColor = title.style.color; // 처음에는 currentColor과 BASE_COLOR이 같음
    //console.log(currentColor);
    if (currentColor === BASE_COLOR) { // true in the beginning
        title.style.color = OTHER_COLOR;
    } else { // from the 2nd round
        title.style.color = BASE_COLOR;
    }
}

// (2) 누구든 document element인 <h1> id=title에 마우스를 갖다댈 때 마다, 배경 색깔이 바뀜
function handleMouse() {
    const currentBodyColor = body.style.backgroundColor;
    //console.log(currentColor);
    if (currentBodyColor === BODY_BASE_COLOR) { // true in the beginning
        body.style.backgroundColor = BODY_OTHER_COLOR;
    } else { // from the 2nd round
        body.style.backgroundColor = BODY_BASE_COLOR;
    }
}



function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleMouse);
}

init(); // call my function here



// (3) 언제든 브라우저가 인터넷 접속 네트워크(와이파이 등)를 잃는 일이 발생할 때 마다, 콘솔창에 메시지를 보내
function handleOffline() {

    console.log("You are offline now! check your internet connection!")
}

function handleOnline() {
    console.log("You are online, Welcome back!");
}

// document가 아니라 window지! 행동을 당하는 주체가 브라우저니까
window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);