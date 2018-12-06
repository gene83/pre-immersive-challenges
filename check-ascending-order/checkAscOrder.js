module.exports = function checkAscOrder(numArray) {
  let acceptable = false;
  for (i=1; i < numArray.length; i++) {
    if (numArray[i-1] < numArray[i]) {
      acceptable = true;
    } else {
      return false;
    }
  }
  return acceptable;
}