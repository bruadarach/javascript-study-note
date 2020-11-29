/*  
    11강 예제는 좋은 예젝 아님
        이유 : 자바스크립트에서 HTML과 CSS를 작업하고 있어서
        해결 : 분리 분업
            - HTML은 HTML에서만
            - CSS은 CSS에서만
            - JS은 JS에서만
                - HTML을 document로 접근해 객체화
                - 이벤트 생성
                - 이벤트 작동 시 HTML, CSS 작동 조건 및 순서 세부 설정

    자바스크립트 이벤트(addEventListener)의 종류 모음
        : https://developer.mozilla.org/en-US/docs/Web/Events


    C.f) className
            : The class is an HTML Attribute, while the className is a DOM Property.
                - e.g) <h1 id="title" class="btn"> 에서 class="btn"는
                    - 'class' in HTML
                    - 'className' in CSS

    C.f) classList
            : element <h1 id="title" class="btn">의 클래스목록(class="btn")에 접근하는 간편한 방법
            : https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/




//////////////////////////////////////////////////////////////////////////////////////////////

/*  HTML <h1>에 class가 정의되지 않은 경우  */
// <h1 id="title"> Pink Sand </h1>

/*
const title = document.querySelector("#title"); // <h1> 객체화
const CLICKED_CLASS = "clicked"; // CSS 세부기능 커넥터

function handleClick() {
    const currentClass = title.className; // 처음엔 <h1>에 셋팅된 clssname이 없음
    //console.log(currentClass);
    if (currentClass !== CLICKED_CLASS) { // if ((empty) in HTML/document) !== (".clicked" in CSS)
        title.className = CLICKED_CLASS; // <h1> class = .clicked 할당
    } else {
        title.className = "" // 다시 <h1>을 class=""로 복귀시킴
    }
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
*/

//////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////

/*  HTML <h1>에 class가 이미 있는 경우  */
// <h1 id="title" class="btn"> Pink Sand </h1>

/*      problem
const title = document.querySelector("#title"); // <h1> 객체화
const CLICKED_CLASS = "clicked"; // CSS 세부기능 커넥터

function handleClick() {
    const currentClass = title.className; // 처음엔 <h1>에 셋팅된 clssname이 없음
    //console.log(currentClass);
    if (currentClass !== CLICKED_CLASS) { // if ((empty) in HTML/document) !== (".clicked" in CSS)
        title.className = CLICKED_CLASS; // <h1> class = .clicked 할당
    } else {
        title.className = "" // 다시 <h1>을 class=""로 복귀시킴
    }
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
// 결과 : <h1>에 다가가면 마우스커서가 포인터로 변하고, 마우스로 클릭하면 색깔이 변함
// 문제 : 일단, 한번 클릭하면 포인터 기능은 다시 쓸 수 없음
//       <class="btn"> -----> <class="clicked"로 전환됨
*/

//////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////

/*      solution (1) 
// classList.add()
//classList.remove()

// 항상 마우스커서가 포인터로 변하게 설정하기
// 마우스커서가 포인터로 변하고, 클릭해서 글자 색깔이 바뀌어도, 여전히 마우스 포인터가 변하도록 만들기

const title = document.querySelector("#title"); // <h1> <h1> id 객체화
const CLICKED_CLASS = "clicked"; // CSS 세부기능 커넥터 // 글자색이 핑크로 변경 // class명은 대문자

function handleClick() {
    const currentClass = title.className; // currentClass = "btn"
    if (currentClass !== CLICKED_CLASS) { // btn !== .clicked
        title.classList.add(CLICKED_CLASS); // <h1> class = btn에 clicked 추가 => 글자 핑크로 변경 
    } else {
        title.classList.remove(CLICKED_CLASS); // 
    }
}

function init() {
    title.addEventListener("click", handleClick); // 이벤트 생성 & 실행 조건/기능 정의
}

init();
// 결과 : <h1 id="title" class="btn"></h1> 이
//       <h1 id="title" class="btn clicked"></h1> 로 변경됨!
// 문제 : else로 가도 class="btn clicked" -> "class=btn" 으로 바꿔지지 않아서, 글자 색이 계속 핑크로 남게됨
 */

//////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////

/*      solution (2)         
// classList.contains

const title = document.querySelector("#title"); // <h1> <h1> id 객체화
const CLICKED_CLASS = "clicked"; // CSS 세부기능 커넥터 // 글자색이 핑크로 변경 // class명은 대문자

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS); // true/false 결과 반환
    if (!hasClass) { // class에 .clicked를 포함하고 있지 않다면!  
        title.classList.add(CLICKED_CLASS); // <h1> class = btn에 clicked 추가 => 글자 핑크로 변경 
    } else { // class가 .clicked를 포함하고 있다면
        title.classList.remove(CLICKED_CLASS); // class = btn에 clicked 삭제 => 글자 핑크->화이트로 변경
    }
}

function init() {
    title.addEventListener("click", handleClick); // 이벤트 생성 & 실행 조건/기능 정의
}

init();
// 결과 : 작동 잘함
// 문제 : 더 짧게 만들어보자! classList.toggle()사용!
*/

//////////////////////////////////////////////////////////////////////////////////////////////




/*      solution (3)       */
// classList.toggle()
const title = document.querySelector("#title"); // <h1> <h1> id 객체화
const CLICKED_CLASS = "clicked"; // CSS 세부기능 커넥터 // 글자색이 핑크로 변경 // class명은 대문자

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS); // true/false 결과 반환
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick); // 이벤트 생성 & 실행 조건/기능 정의
}

init();