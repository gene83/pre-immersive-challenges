module.exports = function needleInHaystack(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return i;
    }
  }
  return false;
}