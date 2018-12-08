module.exports = function reverseMessage(str) {
  /*  string lowercase
   string.split 
   reverse array
   loop through and capitalize
   join array
   */

   let lowStr = str.toLowerCase();
   let lowArr = lowStr.split('');
   lowArr.reverse();

   if (i = 0 && lowArr[0].match(/[a-z]/i)){
    let capLetter = lowArr[0].toUpperCase();
    lowArr.splice(0, 1, capLetter)
   }

  for (let i = 0; i < lowArr.length; i++) {
     if (lowArr[i] === ' ' ) {
      let capLetter = lowArr[i+1].toUpperCase();
       lowArr.splice(i+1, 1, capLetter)
     }  
  }
  return lowArr.join('');
}
