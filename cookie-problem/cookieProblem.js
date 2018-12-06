module.exports = function cookieProblem(array) {
  let mostCookies = 0;
  let cookiesAdded = 0;

  for(i=1; i<array.length; i++){
    let currentNum = array[i];
    let prevNum = array[i-1];
    if (currentNum > prevNum) {
      mostCookies = currentNum;
    }
  }
  
  for(i=0; i<array.length; i++){
    let currentNum = array[i];
    let difference = 0;
    if(currentNum < mostCookies) {
      difference = mostCookies - currentNum;
      currentNum += difference;
      cookiesAdded += difference;
    }
  }
  return cookiesAdded;
}