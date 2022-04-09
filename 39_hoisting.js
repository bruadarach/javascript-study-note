/* Variable, Hoisting, TDZ(Temporal Dead Zone)
    
- var 
- let (from ES6) 
- const (from ES6) 


< 변수 재선언 > 

    - var : 가능
    - let/const : 불가 

*/

var name = "Mike";
console.log(name); // Mike
var name = "Jane";
console.log(name); // Jane

let name = "Mike";
console.log(name); // Mike
let name = "Jane";
console.log(name); // ERROR! uncauht SyntaxERror: Identifier 'name' has already been declared.

/* var는 선언 전 사용 가능 */
