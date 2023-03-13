const { calculator3 } = require('./calculator')

function ise2e(string){
    return string==='sk-e2e'
}
function calculator2(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
  
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      return "Invalid operator";
    }
  
    return result;
  }
module.exports = {
    ise2e,
    calculator2,
    calculator3
}