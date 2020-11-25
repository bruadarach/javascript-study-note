/*  
    1. Conditional Statement 

        if(condition){
            BLOCK
        } else {
            BLOCK
        }
    
    2. &&, ||
        - true && true = true;
        - true && false = false;
        - false && true = false;
        - false && false = false;
        
        - true || true = true;
        - true || false = true;
        - false && true = true;
        - false && false = false;
*/



/*      if / else    */
if (true) {
    console.log("Welcome!")
} else {
    console.log("Error!")
}



/*      if / else    */
if (10 === 5) {
    console.log("Welcome!")
} else {
    console.log("Error!")
}
// Error!



/*      if / else    */
if (10 === '10') {
    console.log("Welcome!")
} else {
    console.log("Error!")
}
// Error!



/*      combine different conditions    */
if (25 > 30 && "suji" == "suji") {
    console.log("in Netherlands")
} else {
    console.log("in Korea")
}

// prompt is kind of old javascript
// now use more, alert in javascript or form in HTML 
const age = prompt("How old are you?");
console.log(age);



/*      combine different conditions    */
if (age >= 18 && age <= 21) { // age between 18 and 21
    console.log("You can drink, but you should not");
} else if (age > 21) {
    console.log("Go head!")
} else {
    console.log("Too young! You can\'t!");
}