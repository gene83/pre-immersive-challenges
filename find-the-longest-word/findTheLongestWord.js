module.exports = function findTheLongestWord(sen) {
  let longest = '';
  for ( let i = 0; i < sen.length; i++) {
    if (sen[i].length > longest.length) {
      longest = sen[i];
    }
  }
  return longest;
}