const calculator = require('./e2e/libs/calculator');
const ise2e = require('./e2e/libs/ise');
const spec= require('./e2e/libs/parse');
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