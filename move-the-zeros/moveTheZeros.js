module.exports = function moveTheZeros(arrNum, isRight) {
  /* iterate through the array
  if is true, ...
  when value is 0, splice to remove, push to add 
*/
let newArr = [];

if (isRight === true) {
  let count = 0;
  for (i=0; i < arrNum.length; i++) {
    if (arrNum[i] != 0) {
      newArr.push(arrNum[i]);
    } else if (arrNum[i] === 0) {
      count++
    }
  }
  for (let i = 0; i < count; i++){
    newArr.push(0);
}
} else if (isRight === false) {
  let count = 0;
  for (i=0; i < arrNum.length; i++) {
    if (arrNum[i] != 0) {
      newArr.push(arrNum[i]);
    } else if (arrNum[i] === 0) {
      count++
    }
  }
  for (let i = 0; i < count; i++){
    newArr.splice(0, 0, 0);
  }
}
return newArr;
}