module.exports = function findTheStrayValue(array) {
  // if first two are the same, 
  // loop through array
  // compare current to previous until current is different
  // return current
  // else if 2nd and third are the same
  // return 1st
  // else return 2nd

  if (array[0] === array[1]) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[i+1]) {
        return array[i+1];
      }
    }
  } else if (array[1] === array[2]) {
    return array[0];
  } else {
    return array[1];
  }
}