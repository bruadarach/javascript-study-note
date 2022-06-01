// const { response } = require("express");

var newsURL = 'http://localhost:4999/data/latestNews';
var weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  /*
  fetch() 
  : The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
  It returns a Promise that resolves to the Response to that request

  ❗ fetch() 함수는, Promise를 리턴합니다!
  ❗ 그래서 fetch() 함수 다음에 .then()을 사용할 수 있는 거예요! 
   */

  // ❗ 우리는 일단 새로운 객체를 하나 만들고 -> fetch()를 통해서 필요한 JSON데이터를 받고 파싱해서 -> 필요한 데이터를 담아서 obj 객체에 담아서 마지막에 리턴해줄꺼예요!
  const obj = {};

  // 가장 단순한 형태의 fetch()는 가져오고자 하는 리소스의 경로(예를 들면 URL)를 나타내는 하나의 인수만 받습니다.
  // ❗ 사용법: fetch(URL) 
  return fetch(newsURL) 

  // fetch()의 응답은 Response 객체로 표현되며, 직접 JSON 응답 본문을 받을 수는 없습니다. 
  // Response는 HTTP 응답 전체를 나타내는 객체로, JSON 데이터(URL의 본문 콘텐츠)를 추출하기 위해서는 json() 메서드를 호출해야 합니다. 
  // ❗ 결론적으로, Promise를 통해 resolve하여 응답받은 데이터를 바로 사용하지 못하고, json()메소드를 사용하여 자바스크립트에서 사용할 수 있는 객체 데이터로 만들어줘야 합니다. 
  // 🌼중요🌼 json()은 응답받은 본문 텍스트를 JSON으로 파싱한 결과로 이행하는 🌼또 다른 프로미스를 반환🌼합니다.    
  // ❗ 따라서, json()은 또 다른 프로미스를 반환하기 때문에, 이어서 .then()을 사용할수 있는거예요!  
  .then((response) => response.json()) // ❗ response.json()을 해주면, JSON 데이터 -> 자바스크립트에서 사용할수 있는 객체 데이터로 변환됩니다. 
  // ❗ 저는 JSON 데이터 -> 자바스크립트 객체 데이터로 변환된 데이터를 그냥 구분하기 쉽게 이름을 `data1`으로 따로 명시해주고 사용했어요! 
  .then((data1) => { 
    obj['news'] = data1["data"];  // ❗ 일단, data1에서 필요한 데이터를 뽑아서 먼저 obj 객체에 담아줄께요.
    // ❗ 계속 Promise 체인을 이어가고 이번엔 weatherURL로부터 데이터를 받기 위해서는, 여기에서 한번더 fetch() 사용해서 Promise를 리턴해줄꺼예요. 
    // ❗ fetch() 함수는 프로미스를 리턴하기 때문에 .then을 사용할 수 있어요.
    // ❗ 여기서부터 data2를 만들기 위한 위한 작업을 시작하는 거죠?
    // ❗ 현재 obj = { news: data1["data"] } 입니다. 
    return fetch(weatherURL)}) // 2번째 fetch() 함수를 실행하여 동일한 작업을 반복해줍니다. 
  .then((response) => response.json()) // JSON 데이터 파싱 -> JS 객체 데이터로 변환합니다. 
  .then((data2) => { // data2가 만들어졌습니다. 
    obj['weather'] = data2; // ❗ data2에서 필요한 데이터를 뽑아서 obj 객체에 담아줍니다.
    return obj; // ❗ obj = { news: data1["data"], weather: data2 }가 되어 리턴됩니다. 
  })
} 

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}


/* 

❗ data1과 data2의 모습을 확인해보세요.

객체  = { 키 : "벨류" }
객체의 키를통해 벨류를 갖고 오려면? 
- 객체.키   
- 객체["키"]

// ❗ data1
// data1 = { data : [  {},{},{}  ]}
// data1 = { 키 : [  {키:벨류,키:벨류,키:벨류}, {키:벨류,키:벨류,키:벨류}, {키:벨류,키:벨류,키:벨류} ]  }
data1 = {  "data"  :    
                              [   
                                    {"row_id":2,
                                    "title":"2021년 경제 성장률 전망 밝아",
                                    "source":"A신문",
                                    "timestamp":"2020/12/30"},
                                    {"row_id":3,"title":"코로나19 증가추세 대폭 하락해",
                                    "source":"BBC",
                                    "timestamp":"2020/12/29"},
                                    {"row_id":4,"title":"코드스테이츠 취업연계 파트너사 xxx건 돌파",
                                    "source":"스타트업 뉴스","timestamp":"2020/12/31"}
                              ]    
}


// ❗ data2
// data2 = { 키 : "벨류", 키 : "벨류", 키 : "벨류" }
data2 = { "status" :"sunny", 
          "temperature" :"28", 
          "fineDust":"good" 
        }


// ❗ getNewsAndWeather()함수는 최종적으로 이런 모습으로 생긴 객체를 리턴해야 합니다! 
//❗ { news : data1['data'], weather: data2 }
{
      news: [
                  {
                    row_id: 2,
                    title: '2021년 경제 성장률 전망 밝아',
                    source: 'A신문',
                    timestamp: '2020/12/30',
                  },
                  {
                    row_id: 3,
                    title: '코로나19 증가추세 대폭 하락해',
                    source: 'BBC',
                    timestamp: '2020/12/29',
                  },
                  {
                    row_id: 4,
                    title: '코드스테이츠 취업연계 파트너사 xxx건 돌파',
                    source: '스타트업 뉴스',
                    timestamp: '2020/12/31',
                  },
            ],
      weather: { status: 'sunny', temperature: '28', fineDust: 'good' },
    };

  */