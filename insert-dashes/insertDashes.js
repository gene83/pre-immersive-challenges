module.exports = function insertDashes(num) {
  /* turn int into array of integers
  iterate through until adjacent even numbers
   if adjacent even, insert a dash 
  */
  let str = '' + num;
  let arr = str.split('');
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1]%2 === 0 && arr[i]%2 === 0) {
      arr.splice(i, 0, '-');
    } 
  }
  return arr.join('');

}