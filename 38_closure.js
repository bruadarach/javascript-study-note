/*
Lexical Scope
: 함수와 변수가 선언된 위치를 기준으로 범위(Scope)가 정해진다. 

Dynamic Scope
: 함수와 변수가 호출된 시점을 기준으로 범위(Scope)가 정해진다. 
*/

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add3 = makeAdder(3);
console.log(add3(2)); // 5

const add10 = makeAdder(10);
console.log(add10(5)); // 15 console.log(add3(1)); // 4

// Information hiding, Encapsulation
function makeCounter(x) {
  let num = 0; // Information hiding (은닉화, Encapsulation)
  return function () {
    return num++;
  };
}
let counter = makeCounter();
console.log(counter()); // 0 console.log(counter()); // 1 console.log(counter()); // 2

// a++는 기존의 값을 가진채로, 이후에 +1을 한다.
// ++a는 기존의 값에서, +1을 한 값을 가진다.
let a = 1;
let b = 1;
console.log(a++); // 1
console.log(++b); // 2
console.log(a); // 2
console.log(b); // 2

let num1 = 0;
num1++;
console.log(num1); // 1
let num2 = 0;
++num2;
console.log(num2); // 1

/*
// practical example (1) 
<!DOCTYPE html>
<html>
  <body>
  <button id="plus">+</button>
  <p id="count">0</p>
  <script>
    let plusBtn = document.getElementById('plus');
    let countTxt = document.getElementById('count');

    let plus= (function () {
      // 카운트 상태를 유지하기 위한 자유 변수
      let count = 0;
      // 클로저를 반환
      return function () {
        return count++;
      };
    }());

    plusBtn.onclick = function () {
      countTxt .innerHTML = plus();
    };
  </script>
</body>
</html>



// practical example (2)
<!DOCTYPE html>
<html>
<body>
  <button class="toggle">toggle button</button>
  <div class="txt">
    <h1>toggle test</h1>
  </div>

  <script>
    let txtField = document.querySelector('.txt');
    let toggleBtn = document.querySelector('.toggle');

    let toggle = (function () {
      let isVisable = false;

      // 1.클로저를 반환
      return function () {
        txtField .style.display = isVisable ? 'block' : 'none';
        // 3. 상태 변경
        isVisable = !isVisable;
      };
    })();

    // 2. 이벤트 프로퍼티에 클로저를 할당
    toggleBtn.onclick = toggle;
  </script>
</body>
</html>
*/

/* 

생활코딩 arguments
  : 함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있다. 
  : 이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다. 
  : 아래 예제를 보자. 결과는 10이다.
  
*/
function sum() {
  var i,
    _sum = 0;
  for (i = 0; i < arguments.length; i++) {
    document.write(i + " : " + arguments[i] + "<br />");
    _sum += arguments[i];
  }
  return _sum;
}
document.write("result : " + sum(1, 2, 3, 4));
// 0 : 1<br />
// 1 : 2<br />
// 2 : 3<br />
// 3 : 4<br />
// result : 10