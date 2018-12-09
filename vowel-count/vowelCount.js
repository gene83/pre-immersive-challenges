module.exports = function vowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ('aieouAEIOU'.includes(str[i])) {
      count++;
    }
  }
  return count;
}