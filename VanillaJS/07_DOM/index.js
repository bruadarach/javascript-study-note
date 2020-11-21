/*
    Document Object Module(DOM)
    (자바스크립트로 HTML 파일에 있는 모든 요소들을 가져올 수 있어)
    (그리고 자바스크립트는 너의 HTML 태그를 가져다가 그것을 객체로 만들 수 있어)

    1. 자바스크립트로 타이틀 바꾸기
        : 바꿀 것을 (아이템을 => <h></h1>)을 선택(access and grab)해보자!
            - 'title'이란 고유 id를 주어서 선택/접근 해보자
                : <h1 id="title">
*/


// JS는 'document' 로 선택/접근 !
// document 는 object! 
// document kind of means HTML, the whole code
console.log(document); // document를 대표하는 HTML을 줌  


// HTML요소의 객체화
const title = document.getElementById("title");
console.log(title); // <h1 id="title">DOM Function</h1>


// 객체가 된 title은 JS의 function들을 쓸 수 있게 됐어
// index.html의 <h1></h1>의 오리지널 컨텐츠는 변경 없음. inplace=True는 아니지만 컨텐츠를 바꿔서 보여줌 
title.innerHTML = "Now, Javascript is handling all!" // <h1></h1>의 컨텐츠가 변경됨 
title.innerHTML = "the latest!" // title.innerHTML이 2개 있다면, 가장 마지막에 쓴 것이 반영되네