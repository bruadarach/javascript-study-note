/* Variable, Hoisting, TDZ(Temporal Dead Zone)

var
    - 함수 스코프 ( function-scoped )

        e.g) if문 안에서 var로 선언한 변수는 if문 밖에서도 사용 가능
             단, 함수안에서 선언되면 밖에서 사용 불가. (var가 유일하게 벗어날 수 없는 스코프가 '함수'임.)

            const age = 30;
            if (age > 19) {
                var txt = '성인';
            }
            
            console.log(txt) // '성인'

        
        e.g) 함수 안에서 선언된 var 변수는, 함수 밖에서 사용 불가
            
            function add(num1, num2) {
                var result = num1+num2;
            };

            add(2,3);
            console.log(result); // Uncaught ReferenceError: result is not defined.

        

let/const
     - ES6 이후 문법
     - 블록 스코프 ( block-scoped )
        : 모든 코드 블록 내에서 선언된 변수는
          코드 블록 내에서만 유효하며
          외부에서는 접근할 수 없다. 
          따라서, 코드블록(함수, if문, for문, while문, try/catch문 등) 내부에서 선언도니 변수는 지역변수인 것

          e.g) 
          
            function add () {
                // block-level scope
            }

            if () {
                // block-level scope
            }


< 변수 생성 과정 3단계 >
1. 선언
2. 초기화
3. 할당 

- var (값이 바뀔 수 있기 때문에, 선언만 해두고 후할당 가능)

1. 선언+초기화 = undefined
2. 할당 

- let (값이 바뀔 수 있기 때문에, 선언만 해두고 후할당 가능. 할당전 호출시 ReferenceError!)

1. 선언 딘계 (호이스팅 됨)
2. 초기화 딘계 (호이스팅 불가. 실제 코드에 돨해야 초기화됨)
3. 할당 

- const (값이 바뀔 수 없기 때문에, 선언과 동시에 초기화+할당)
1. 선언+초기화+할당

< 변수 재선언 > 

- var : 가능
- let/const : 불가 

Hoising
: 스코프 내부 어디에서든, 변수 '선언'이 최상위에 선언된 것 처럼 행동하는 것. 
: 선언은 호이스팅 되지만, 할당은 호이스팅되지 않음! 
: let, const도 호이스팅이 되지만,  TDZ의 영향을 받기 때문에 이 영역에 있는 변수는 할당을 하기 전에는 사용 불가. 
: 호이스팅은 스코프 단위로 일어남 (함수 외부와 함수 내부 스코프가 다르므로 변수 선언/초기화/할당에 및 TDZ 발생 여부에 주의)

Hoising 장점
: 코드 예측 가능, 잠재적인 버그 감소
    



*/

var name = "Mike";
console.log(name); // Mike
var name = "Jane";
console.log(name); // Jane

let name = "Mike";
console.log(name); // Mike
let name = "Jane";
console.log(name); // ERROR! uncauht SyntaxERror: Identifier 'name' has already been declared.

/* var는 선언 전 변수 사용 가능 */
console.log(name); // undefined
var name = "Mike";

var name; // TDZ // 호이스팅
console.log(name); // undefined
name = "Mike"; // 할당

/* let은 선언 전 변수 사용 불가*/

console.log(name); // ReferenceError!
let name = "Mike";

/* TDZ - 가능 예제 */
let age = 30;
function showAge() {
  console.log(age); // 30
}

showAge(); // 30

/* TDZ - 에러 예제 
         에러 이유 : 호이스팅은 '스코프'단위로 일어나기 때문. 
*/
let age = 30;
function showAge() {
  console.log(age); // TDZ // Reference Error! // 함수 내부 스코프에 TDZ 발생
  let age = 1;
}

showAge(); // Reference Error!
