module.exports = function countByMultiples(length, x) {
  let array = []
  for(i=0; i<length ; i++) {
    let currentValue = x*(i+1);
    array.push(currentValue);
  }
  return array;
}