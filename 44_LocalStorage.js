/* 로컬 스토리지에 데이터 추가 */
localStorage.setItem('discussions', JSON.stringify(agoraStatesDiscussions));

/* 로컬 스토리지에서 데이터 불러오기 */
let getStorageData = JSON.parse(localStorage.getItem('discussions'));