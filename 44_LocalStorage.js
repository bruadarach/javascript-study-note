/* 로컬스토리지 사용 위치 */
// (개발자 도구) → Application → Storage (Local&Session)

/* 
- localStorage를 사용하면 Storage 객체에 접근 가능.
- 저장한 데이터는 브라우저 세션 간에 공유됨.
- localStorage 에 저장되는 데이터는 해당하는 도메인 주소에 종속돼서 저장됨 → 쉽게 생각하면 사이트에 종속이 되는 개념 
- localStorage 에는 문자열만 저장됩니다.
*/
Window.localStorage

/* local storage VS. session storage 
localStorage:데이터는 만료되지 않음. (따로 지우지 않는 이상 로컬 스토리지의 데이터는 반영구적으로 사용 가능)
sessionStorage: 페이지 세션이 끝날 때 즉, 페이지를 닫을 때 데이터가 사라짐.
*/


/* 
LocalStorage 객체에 데이터 추가 
localStorage.setItem(Key, Value)
- 인수들은 되도록이면 문자데이터 형태로 입력
- 배열데이터, 객체데이터는 어떻게 문자로 저장 → JSON.stringify 이용해서 문자데이터화 시켜 저장함. 
*/
localStorage.setItem('discussions', JSON.stringify(agoraStatesDiscussions));

/* 
LocalStorage에서 데이터 불러오기 
localStorage.getItem(Key)
*/
let getStorageData = JSON.parse(localStorage.getItem('discussions'));

/*  LocalStorage에서 데이터 삭제  
localStorage.removeItem(Key)
*/
LocalStorage.removeItem('discussions')

/* LocalStorage에 값 전체 삭제하기 */
localStorage.clear();

/* localStorage의 아이템 갯수 구하기 */
localStorage.length

/* LocalStorage에 배열/객체 저장 방법 
-> 저장 : JSON.stringify
-> 불러오기 : JSON.parse 
*/

// localStorage에 저장할 객체
const obj = {
    name : 'anna',
    age : 20
}
// localStorage에 저장할 배열
const arr = [1, 2, 3];

// 객체, 배열을 JSON 문자열로 변환
const objString = JSON.stringify(obj);
const arrString = JSON.stringify(arr);

objString // '{"name":"anna","age":20}'
arrString // '[1,2,3]'

// 저장: setItem
window.localStorage.setItem('person', objString);
window.localStorage.setItem('nums', arrString);

// 불러오기: getItem
const personString = window.localStorage.getItem('person');
const numsString = window.localStorage.getItem('nums');

// JSON 문자열을 객체, 배열로 변환
const personObj = JSON.parse(personString);
const numsArr = JSON.parse(numsString);


/* 객체데이터 -> 로컬스토리지 저장 

JSON.stringify()와 JSON.parse() 제대로 활용하기

객체 데이터를 바로 로컬스토리지 인수로 넣으면 
개발자 도구에서 제대로 저장되지 않음.
→ 문자데이터화 해주자!

*/
const user = {
    name: 'John',
    age: 30,
    emails: [
      'john@gmail.com',
      'mike@gmail.com'
    ]
  }
  //localStorage.setItem('user', user) -> X
  localStorage.setItem('user', JSON.stringify(user));



  /* 로컬스토리지 데이터 -> JS로 불러오기
  문자데이터 형태로 출력되므로 -> JS에서 쓰기 좋은 객체데이터로 변환해주자!
  */
  const user = {
    name: 'John',
    age: 30,
    emails: [
      'john@gmail.com',
      'mike@gmail.com'
    ]
  }
  
  localStorage.setItem('user', JSON.stringify(user))
  console.log(JSON.parse(localStorage.getItem('user')))
  //{name: 'John', age: 30, emails: Array(2)} // Array(2)


  /* localStorage.removeItem( ) 사용 예제
  !) 스토리지에서 데이터는 지워지지만, 콘솔창에 user찍으면 여전히 데이터가 나옴; 
   */
  const user = {
    name: 'John',
    age: 30,
    emails: [
      'john@gmail.com',
      'mike@gmail.com'
    ]
  }
  
  localStorage.setItem('user', JSON.stringify(user))
  console.log(JSON.parse(localStorage.getItem('user')))
  localStorage.removeItem('user')
  user // //{name: 'John', age: 30, emails: Array(2)}

  /* 로컬스토리지 값 업데이트/덮어쓰기 
  */
  const user = {
    name: 'John',
    age: 30,
    emails: [
      'john@gmail.com',
      'mike@gmail.com'
    ]
  }
  // {name: 'John', age: 30, emails: Array(2)}
localStorage.setItem('user', JSON.stringify(user))
const obj = JSON.parse(localStorage.getItem('user')) 

obj.age = 25 // obj.key
console.log(obj) // {name: 'John', age: 25, emails: Array(2)}
// JS객체  obj // 나이:25 // {name: 'John', age: 25, emails: Array(2)}
// LocalStorage.user // 나이:30 (안바뀜)) // '{"name":"John","age":25,"emails":["john@gmail.com","mike@gmail.com"]}'
localStorage.setItem('user', JSON.stringify(obj))
// LocalStorage.user // 나이:24 (바뀜) // '{"name":"John","age":25,"emails":["john@gmail.com","mike@gmail.com"]}'