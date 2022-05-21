/* 로컬스토리지 사용 위치 */
// (개발자 도구) → Application → Storage (Local&Session)

/* 
- localStorage를 사용하면 Storage 객체에 접근 가능.
- 저장한 데이터는 브라우저 세션 간에 공유됨.
- localStorage에 저장되는 데이터는 해당하는 도메인 주소에 종속돼서 저장됨 → 쉽게 생각하면 사이트에 종속이 되는 개념 
*/
Window.localStorage

/* local storage VS. session storage 
localStorage:데이터는 만료되지 않음. (따로 지우지 않는 이상 로컬 스토리지의 데이터는 반영구적으로 사용 가능)
sessionStorage: 페이지 세션이 끝날 때 즉, 페이지를 닫을 때 데이터가 사라짐.
*/

/* 
LocalStorage 객체에 데이터 추가 
- 인수들은 되도록이면 문자데이터 형태로 입력
- 배열데이터, 객체데이터는 어떻게 문자로 저장 → JSON.stringify 이용해서 문자데이터화 시켜 저장함. 
*/
localStorage.setItem('discussions', JSON.stringify(agoraStatesDiscussions));

/* 로컬 스토리지에서 데이터 불러오기 */
let getStorageData = JSON.parse(localStorage.getItem('discussions'));