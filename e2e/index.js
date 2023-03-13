const calculator = require('./libs/calculator');
const ise2e = require('./libs/iseise');
const parse = require('./libs/parse');
const { test, expect } = require('@playwright/test');

console.log(ise2e('sk-s'))
console.log(calculator(5, 3, "+")); // Output: 8
module.exports = {
    ise2e,
    calculator,
    parse,
    test,
    expect
}