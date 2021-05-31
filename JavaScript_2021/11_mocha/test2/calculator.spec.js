var assert = require("assert");

describe("let's calculate!", function() {
    describe('TEST: ADD', function() {
        it('1+2=?', function(done) {
            assert.equal(1 + 2, 3);
            done();
        })
        it('3000+2000=?', function(done) {
            assert.equal(3000 + 2000, 5000);
            done();
        })
    });

    describe('TEST: MULTIPLY', function() {
        it('5*5=?', function(done) {
            assert.equal(5 * 5, 25);
            done();
        })
        it('100*100=?', function(done) {
            assert.equal(100 * 100, 10000);
            done();
        })
    })

})