const { calculator, ise2e, spec} = require('./libs');
//const ise2e = require('./libs/ise');
//const spec = require('./libs/parse');
const { test, expect } = require('@playwright/test');

console.log(ise2e('sk-s'))
console.log(calculator(5, 3, "+")); // Output: 8
module.exports = {
    ise2e,
    calculator,
    spec,
    test,
    expect
}