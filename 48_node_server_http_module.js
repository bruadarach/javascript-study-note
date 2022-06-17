const http = require('http'); // create a server 1

const PORT = 4999; // create a server 3
const ip = 'localhost'; // create a server 3

const server = http.createServer((request, response) => { // create a server 2

  // request & response - error handling
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
    response.end();
  });
  
  if (request.method === "OPTIONS") {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  } else if (request.method === 'POST' && request.url === '/lower') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => { 
      body = Buffer.concat(body).toString(); 
      body = body.toLowerCase();
      response.writeHead(201, defaultCorsHeader);
      response.end(body);
    }) 
  } else if (request.method === 'POST' && request.url === '/upper') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => { 
      body = Buffer.concat(body).toString(); 
      body = body.toUpperCase();
      response.writeHead(201, defaultCorsHeader);
      response.end(body);
    }) 
  } 
  // else {
  //   response.statusCode = 404;
  //   response.end();
  // }
});

server.listen(PORT, ip, () => { // create a server 3
  console.log(`http server listen on ${ip}:${PORT}`); 
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};

// const server = http.createServer(요청 메서드(이벤트리스너 역할), 이벤트핸들러 콜백함수 )
// Nodejs의 EventEmitter 는 특정 이벤트에 리스너 함수를 달아서, 이벤트가 발생했을 때 이를 캐치할 수 있도록 만들어진 api이다. 
// 이 동작은 일반적으로 이벤트 리스너가 원래 등록된 이벤트 핸들러보다 나중에 호출되기 때문에 비동기처럼 보인다. */


//  요청을 실제로 처리하려면 listen 메서드가 server 객체에서 호출되어야 합니다. 
// 대부분은 서버가 사용하고자 하는 포트 번호를 listen에 전달하기만 하면 됩니다.  

//------------------------------서버생성 완료-------------------------------//

/* REQUEST 요청

메소드 사용법
const { method, url } = request; 


요청 헤더 접근법
const { headers } = request;
const userAgent = headers['user-agent'];

// 모든 헤더는 소문자로만 표현된다는 것을 기억해야 합니다. 이는 어떤 목적이든 헤더를 파싱하는 작업을 간편하게 해줍니다.
// 일부 헤더를 반복해서 설정한다면 이 값은 헤더에 따라 덮어씌워지거나 콤마로 구분된 문자열로 합쳐집니다. 이게 문제가 될 경우에는 rawHeaders를 사용할 수도 있습니다.


요청 바디
let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  // 여기서 `body`에 전체 요청 바디가 문자열로 담겨있습니다.
});


오류 응답 처리
request.on('error', (err) => {
  // 여기서 `stderr`에 오류 메시지와 스택 트레이스를 출력합니다.
  console.error(err.stack);
});


const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // 여기서 헤더, 메서드, url, 바디를 가지게 되었고
    // 이 요청에 응답하는 데 필요한 어떤 일이라도 할 수 있게 되었습니다.
  });
}).listen(8080); // 이 서버를 활성화하고 8080 포트로 받습니다.



/* RESPONSE 응답

HTTP 상태 코드
따로 설정하지 않으면 응답의 HTTP 상태 코드는 항상 200입니다. 
response.statusCode = 404; // 클라이언트에게 리소스를 찾을 수 없다고 알려줍니다.


응답 헤더
응답에 헤더를 설정할 때 헤더 이름의 대소문자는 중요하지 않습니다. 헤더를 여러 번 설정한다면 마지막에 설정한 값을 보낼 것입니다.
편리한 setHeader 메서드로 헤더를 설정합니다.

response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');



// 응답 데이터 준비 완료
 응답 헤더 설정 
response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');


 명시적인 헤더 데이터 전송
response.writeHead(200, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'bacon'
});


응답 바디 전송법
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();

축약 문법
response.end('<html><body><h1>Hello, World!</h1></body></html>');

*/