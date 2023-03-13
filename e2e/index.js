const calculator = require('./libs/calculator');
const ise2e = require('./libs/ise');
const spec= require('./libs/parse');
const { test, expect } = require('@playwright/test');


console.log(ise2e('sk-s')) // false:

console.log(calculator(5, 3, "+")); // Output: 8

console.log(spec.name);


module.exports = {
    ise2e,
    calculator,
    spec,
    test,
    expect
}