var p2 = require('../src/power2.js')

Array.prototype.contains = function (value) {
    for (var k in this) {
        if (this[k] == value) {
            return true;
        }
    }

    return false;
}

module.exports = {
    testIfWithOneNumberReturnsCorrectly: function (test) {
        var n = 16;
        var nums = p2(n);

        test.ok(nums.contains(16));
        test.done();
    }
  , testIfWithTwoNumbersReturnsCorrectly: function (test) {
        var n = 18;
        var nums = p2(n);

        test.ok(nums.contains(16));
        test.ok(nums.contains(2));
        test.done();
    }
  , testIfWithThreeNumbersReturnsCorrectly: function (test) {
        var n = 50;
        var nums = p2(n);

        test.ok(nums.contains(32));
        test.ok(nums.contains(16));
        test.ok(nums.contains(2));
        test.done();
    }
}