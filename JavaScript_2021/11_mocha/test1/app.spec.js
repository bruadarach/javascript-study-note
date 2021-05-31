/* 1. Alert & console.log => old way */

// const sayHello = require('/Users/datasciencestudy/Desktop/test/app').sayHello;

// if (sayHello) {
//     console.log('App test!');
//     if (sayHello() === 'hello') {
//         console.log('Success');
//     } else {
//         console.log('Fail');

//     }
// }



/* 2. describe() & it & done() */

// const sayHello = require('/Users/datasciencestudy/Desktop/test/app').sayHello;

// describe('App test!', function() {
//     it('sayHello should return hello', function(done) {
//         if (sayHello() === 'hello') {
//             done();
//         }
//     });
// });


/* 3. Node.js 'assert' module */

const assert = require('assert'); // Node.js `assert` module
const sayHello = require('/Users/datasciencestudy/Desktop/test/app').sayHello;

describe('App test!', function() {
    it('sayHello should return "hello"', function() {
        assert.equal(sayHello(), 'hello');
    });
});