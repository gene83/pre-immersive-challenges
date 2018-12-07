module.exports = function findUniqueNum(strOfNums) {
  // get an array of integers to loop over
  let arrOfStr = strOfNums.split(' ');
  let arrOfInt = [];
  for (let i = 0; i < arrOfStr.length; i++) {
    arrOfInt[i] = parseInt(arrOfStr[i], 10);
  }
  // compare modulo of current number to that of its surrounding numbers, 
  // if both are different return index of current number,
  // if no value is returned and the modulo of the first and second are different, return 0
  
  for (let i = 1; i < arrOfInt.length; i++) {
    if (arrOfInt[i-1]%2 !== arrOfInt[i]%2 && arrOfInt[i]%2 !== arrOfInt[i +1]) {
      return i;
    } else if (arrOfInt[0]%2 != arrOfInt[1]%2) {
      return 0;
    }
  }
}