module.exports = function descendingOrder(number) {
  if(typeof number === 'number') {
  let arr = (''+number).split('');
  arr.sort();
  arr.reverse();
  let str = arr.join('');
  let answer = parseInt(str, 10);
  return answer;
  } else {
    return 'not a number!';
  }
}