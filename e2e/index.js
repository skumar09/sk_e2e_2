const calculator = require('./calculator');
const ise2e = require('./ise');
const { test, expect } = require('@playwright/test');

console.log(ise2e('sk-s'))
console.log(calculator(5, 3, "+")); // Output: 8
module.exports = {
    ise2e,
    calculator,
    test,
    expect
}