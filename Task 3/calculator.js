class calculator {
    static add(num1, num2) {
      return num1 + num2;
    }
  
    static minus(num1, num2) {
      return num1 - num2;
    }
  
    static multiply(num1, num2) {
      return num1 * num2;
    }
  
    static divide(num1, num2) {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error";
      }
    }
  }
  
  module.exports = calculator;