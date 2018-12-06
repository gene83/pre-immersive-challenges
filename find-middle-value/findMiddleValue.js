module.exports = function findMiddleValue(numArray) {
    let firstNum = numArray[0];
    let secondNum = numArray[1];
    let thirdNum = numArray[2];

    if (firstNum < secondNum && secondNum < thirdNum ||  thirdNum < secondNum && secondNum < firstNum) {
      return 1;
    } else if (secondNum < firstNum && firstNum < thirdNum ||  thirdNum < firstNum && firstNum < secondNum) {
      return 0;
    } else {
      return 2;
    }
 } 