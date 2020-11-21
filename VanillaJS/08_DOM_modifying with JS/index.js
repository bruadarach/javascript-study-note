/*
    Document Object Module(DOM)
        :  JS로 HTML을 조종하기 위하여! 
    
    1. HTML의 모든 요소/태그로 DOM 객체로 바꿀 수 있음
        : 자바스크립트로 HTML 파일에 있는 모든 요소들을 가져올 수 있어
        : 그리고 자바스크립트는 너의 HTML 태그를 가져다가 그것을 객체로 만들 수 있어

    2. title이 할 수 있는 모든 것?!  (=우리가 수정할 수 있는 모든 것) 
        : console.dir(객체명)
*/



/* (1) id가 title인 것을 수정 
        : Document.getElementById() 사용
            : 메서드는 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 
            이를 나타내는 Element 객체를 반환합니다. 
            ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용합니다.  
            id에 맞는 요소가 없으면 null을 반환            */
const title = document.getElementById("title");
title.innerHTML = "Hello, from index.js"
title.style.color = "red "



/* (2) HTML의 <title></title> 태그를 수정 */
document.title = "Title modified"



/* (3) Question */
// HTML 태그(tag)와 속성(attribute)에 접근하는 방법이 다른가? 
document.h1 = "NOT changed" // 실행안됨!! // 이게 수정이 안되는 이유는? 
document.title = "Changed by JS!" // 실행됨



/* ERROR OCCURING PART - need to comment out (4) part to run the next paragraph */
/* (4) id가 없는 것을 수정
        : Document.querySelector() 사용
            : 노드의 첫번쨰 자식을 반환함 (= 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환)
                - CSS 선택자와 비슷        
                - # => id
                - . => class   
            : 일치하는 요소(id, class, etc)가 없으면 null 반환 */
const titleClass = document.querySelector(".title") // .은 class로 선택한다는 뜻
titleClass.innerHTML = "Hello, from index.js"
titleClass.style.color = "red "
    // ERROR: Uncaught TypeError: Cannot set property 'innerHTML' of null at index.js:45
    // Because, title is null(=undefined)
    // 우리 index.html에는 id만 1개 설정해줬고, class는 없으므로 에러가 났어

const titleId = document.querySelector("#title") // #는 id로 선택한다는 뜻
titleId.innerHTML = "Hello, from index.js" // working! 
titleId.style.color = "blue "



/* 최종적으로, const title과 const const titleID 중에
    const titleID 이 적용돼었어 */