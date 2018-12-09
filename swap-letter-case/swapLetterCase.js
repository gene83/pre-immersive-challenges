module.exports = function swapLetterCase(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(arr[i])){
      let lowerCase = arr[i].toLowerCase();
      arr.splice(i, 1, lowerCase);
    } else if ('abcdefghijklmnopqrstuvwxyz'.includes(arr[i])){
      let upperCase = arr[i].toUpperCase();
      arr.splice(i, 1, upperCase);
    }
  }
  let swapStr = arr.join('');
  return swapStr;
}