module.exports = function acceptableSequence(str) {
  let acceptable = false;
  for (let i=0; i<str.length; i++) {
    if (/\w/.test(str[i])) {
      if (str[i-1] === '+' && str[i+1] === '+') {
        acceptable = true;
      } else {
        return false;
      }
    }
  }
  return acceptable;
}