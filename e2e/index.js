const calculator = require('./calculator');
const ise2e = require('./ise');

console.log(ise2e('sk-s'))
console.log(calculator(5, 3, "+")); // Output: 8
module.exports = {
    ise2e,
    calculator
}